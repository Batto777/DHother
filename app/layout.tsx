// app/layout.tsx
import './globals.css';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* CSS Webflow – avec tes vrais fichiers */}
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/webflow.css" />
        <link
          rel="stylesheet"
          href="/css/detroit-holding-website-d68318.webflow.css"
        />
      </head>

      <body>
        {children}

        {/* jQuery AVANT Webflow */}
        <Script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          strategy="beforeInteractive"
        />

        {/* Script Webflow exporté */}
        <Script
          src="/js/webflow.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
