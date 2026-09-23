'use client';
import React, { useEffect, useRef, useState } from 'react';

// Web voice agent: backend (/web/token) se token leta hai, LiveKit room join
// karta hai, mic on karta hai aur agent ki awaaz chalata hai.
const API_URL = process.env.NEXT_PUBLIC_VOICE_API_URL;
const TENANT_ID = process.env.NEXT_PUBLIC_VOICE_TENANT_ID;
const EMBED_KEY = process.env.NEXT_PUBLIC_VOICE_EMBED_KEY;

const ERRORS = {
  402: 'Voice minutes are used up for now. Please try again later.',
  403: 'Voice assistant is not available on this site.',
  429: 'All lines are busy. Please try again in a moment.',
};

const VoiceAgentButton = () => {
  const [status, setStatus] = useState('idle'); // idle | connecting | connected
  const [muted, setMuted] = useState(false);
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [error, setError] = useState('');
  const roomRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Pull the library in once the page is idle. Doing it on click instead put
    // the download in front of every conversation.
    const warm = () => {
      // Open the connection to the API before the click needs it.
      if (API_URL) {
        const l = document.createElement('link');
        l.rel = 'preconnect';
        l.href = API_URL;
        l.crossOrigin = 'anonymous';
        document.head.appendChild(l);
      }
      import('livekit-client').catch(() => {});
    };
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(warm, { timeout: 4000 })
      : setTimeout(warm, 2000);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else clearTimeout(id);
      roomRef.current?.disconnect();
    };
  }, []);

  if (!API_URL || !TENANT_ID) return null;

  const cleanup = () => {
    roomRef.current = null;
    if (audioRef.current) audioRef.current.innerHTML = '';
    setStatus('idle');
    setMuted(false);
    setAgentSpeaking(false);
  };

  const start = async () => {
    setError('');
    setStatus('connecting');
    try {
      const res = await fetch(`${API_URL}/web/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(EMBED_KEY ? { 'X-OVX-Embed-Key': EMBED_KEY } : {}),
        },
        body: JSON.stringify({ tenant_id: TENANT_ID }),
      });
      if (!res.ok) throw new Error(ERRORS[res.status] || 'Could not connect. Please try again.');
      const { token, url } = await res.json();

      // livekit-client sirf click par load hota hai, homepage ka bundle halka rehta hai
      const { Room, RoomEvent, Track } = await import('livekit-client');
      const room = new Room({ adaptiveStream: true, dynacast: true });
      roomRef.current = room;

      room
        .on(RoomEvent.TrackSubscribed, (track) => {
          if (track.kind === Track.Kind.Audio) audioRef.current?.appendChild(track.attach());
        })
        .on(RoomEvent.TrackUnsubscribed, (track) => {
          track.detach().forEach((el) => el.remove());
        })
        .on(RoomEvent.ActiveSpeakersChanged, (speakers) => {
          setAgentSpeaking(speakers.some((p) => !p.isLocal));
        })
        .on(RoomEvent.Disconnected, cleanup);

      await room.connect(url, token);
      await room.startAudio();
      await room.localParticipant.setMicrophoneEnabled(true);
      setStatus('connected');
    } catch (e) {
      roomRef.current?.disconnect();
      cleanup();
      setError(
        e?.name === 'NotAllowedError'
          ? 'Please allow microphone access to talk to the assistant.'
          : e?.message || 'Could not connect. Please try again.'
      );
    }
  };

  const stop = () => roomRef.current?.disconnect();

  const toggleMute = async () => {
    const room = roomRef.current;
    if (!room) return;
    await room.localParticipant.setMicrophoneEnabled(muted);
    setMuted(!muted);
  };

  return (
    <div className="voice-agent">
      <div ref={audioRef} hidden />
      {error && <p className="va-error">{error}</p>}

      {status === 'connected' ? (
        <div className="va-panel">
          <span className={`va-dot ${agentSpeaking ? 'speaking' : ''}`} />
          <span className="va-label">{agentSpeaking ? 'Speaking…' : 'Listening…'}</span>
          <button type="button" className="va-btn" onClick={toggleMute}>
            {muted ? 'Unmute' : 'Mute'}
          </button>
          <button type="button" className="va-btn va-end" onClick={stop}>
            End
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="va-start"
          onClick={start}
          disabled={status === 'connecting'}
        >
          <span className="va-mic" aria-hidden="true">🎙</span>
          {status === 'connecting' ? 'Connecting…' : 'Talk to my AI'}
        </button>
      )}

      <style jsx>{`
        .voice-agent {
          position: fixed;
          left: 24px;
          bottom: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          font-family: inherit;
        }
        .va-start,
        .va-panel {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 999px;
          background: #1a1a1a;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          font-size: 14px;
        }
        .va-start {
          cursor: pointer;
          transition: transform 0.2s;
        }
        .va-start:hover {
          transform: translateY(-2px);
        }
        .va-start:disabled {
          opacity: 0.7;
          cursor: wait;
        }
        .va-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #4caf50;
        }
        .va-dot.speaking {
          animation: va-pulse 0.8s infinite;
        }
        .va-label {
          min-width: 80px;
        }
        .va-btn {
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: transparent;
          color: #fff;
          cursor: pointer;
          font-size: 13px;
        }
        .va-end {
          background: #e53935;
          border-color: #e53935;
        }
        .va-error {
          max-width: 260px;
          margin: 0;
          padding: 8px 12px;
          border-radius: 8px;
          background: #2a1515;
          color: #ffb4b4;
          font-size: 13px;
        }
        @keyframes va-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.6;
          }
        }
        @media (max-width: 480px) {
          .voice-agent {
            left: 16px;
            bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default VoiceAgentButton;
