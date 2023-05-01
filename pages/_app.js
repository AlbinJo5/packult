import '../styles/global.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';



function MyApp({ Component, pageProps }) {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  useEffect(() => {
    AOS.init();
    const cursor = document.querySelector("#cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  }, []);

  return (
    <>
      <Script
        async
        src={'http://www.googletagmanager.com/gtag/js?id=${GTM_ID}'}
      />
      <Script
        id="GTM_TAG"
        dangerouslySetInnerHTML={{
          _html: `
               window.dataLayer = window.dataLayer || []; 
               function gtag(){dataLayer.push(arguments);} 
               gtag('js', new Date()); 
               gtag('config', '${GTM_ID}', 
               { page_path: window.location.pathname,
               });
               `,
        }}
      />


      <Script
        id="APP"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Packult.com",
              "url": "https://packult.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://packult.com/#{search_term_string}",
                "query-input": "required name=search_term_string"

              }
            }
          )
        }}
      />
      <div id="cursor" >
        <span id="cursorSpan"></span>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
