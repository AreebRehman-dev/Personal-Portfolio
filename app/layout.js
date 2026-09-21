import './globals.css';

export default function RootLayout({ children }) {
  // loader.jsx ka inline script hydration se pehle <html> pe `skip-loader`
  // class laga sakta hai — suppressHydrationWarning us mismatch ko chup karata hai.
  return (
    <html lang="en" suppressHydrationWarning>
      {children}
    </html>
  );
}
