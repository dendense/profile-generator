import * as React from "react";
import Script from "next/script";

const Analytics = () => (
  <div>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-B5V0R8JJG0"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-B5V0R8JJG0');
        `}
    </Script>
  </div>
);

export default Analytics;
