'use client';
import React, { useEffect, useRef, useState } from 'react';

// Web voice agent: backend (/web/token) se token leta hai, LiveKit room join
// karta hai, mic on karta hai aur agent ki awaaz chalata hai.
const API_URL = process.env.NEXT_PUBLIC_VOICE_API_URL;
const TENANT_ID = process.env.NEXT_PUBLIC_VOICE_TENANT_ID;
const EMBED_KEY = process.env.NEXT_PUBLIC_VOICE_EMBED_KEY;
// The media server the call runs on. Knowing it before the click lets the whole
// media path be warmed up front, which is most of the wait on a phone. The
// token response carries the real URL anyway, so a stale value costs nothing.
const LIVEKIT_URL = process.env.NEXT_PUBLIC_LIVEKIT_URL;

const ROOM_OPTIONS = { adaptiveStream: true, dynacast: true };

function preconnect(href) {
  if (!href) return;
  try {
    const l = document.createElement('link');
    l.rel = 'preconnect';
    l.href = href.replace(/^ws/, 'http');
    l.crossOrigin = 'anonymous';
    document.head.appendChild(l);
  } catch {
    /* not a host we can warm */
  }
}

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
  const warmRoomRef = useRef(null);

  useEffect(() => {
    // Everything the click would otherwise pay for: the library, the TLS
    // connections, and the media server's own handshake.
    let done = false;
    const warm = async () => {
      if (done) return;
      done = true;
      preconnect(API_URL);
      preconnect(LIVEKIT_URL);
      try {
        const { Room } = await import('livekit-client');
        if (LIVEKIT_URL && !warmRoomRef.current) {
          const room = new Room(ROOM_OPTIONS);
          // livekit-client documents this as a page-load call: it resolves the
          // region and opens the connection while nobody is waiting.
          room.prepareConnection(LIVEKIT_URL);
          warmRoomRef.current = room;
        }
      } catch {
        /* retried on click */
      }
    };

    // A phone is busy at load, so an idle callback can be seconds late — and a
    // visitor who taps before it fires pays for all of the above.
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(warm, { timeout: 1500 })
      : setTimeout(warm, 1200);
    const events = ['pointerdown', 'touchstart', 'scroll'];
    events.forEach((ev) => window.addEventListener(ev, warm, { once: true, passive: true }));

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else clearTimeout(id);
      events.forEach((ev) => window.removeEventListener(ev, warm));
      warmRoomRef.current?.disconnect();
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
      // Both at once: the library is usually already warm, and when it is not
      // it downloads alongside the token request rather than after it.
      const [res, { Room, RoomEvent, Track }] = await Promise.all([
        fetch(`${API_URL}/web/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(EMBED_KEY ? { 'X-OVX-Embed-Key': EMBED_KEY } : {}),
          },
          body: JSON.stringify({ tenant_id: TENANT_ID }),
        }),
        import('livekit-client'),
      ]);
      if (!res.ok) throw new Error(ERRORS[res.status] || 'Could not connect. Please try again.');
      const { token, url } = await res.json();
      const room = warmRoomRef.current || new Room(ROOM_OPTIONS);
      warmRoomRef.current = null;          // one call per prepared room
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
