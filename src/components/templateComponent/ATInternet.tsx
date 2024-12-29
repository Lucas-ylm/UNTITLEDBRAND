"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

type ATInternetProps = {
  chapter1: string;
  chapter2: string;
};

declare global {
  interface Window {
    _paq?: Array<unknown>;
    MAD_AT_IS_LOADED?: boolean;
  }
}

export default function ATInternet({ chapter1, chapter2 }: ATInternetProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.MAD_AT_IS_LOADED) return;

    window._paq = window._paq ?? [];
    window._paq.push([
      "sendEvent",
      "page.display",
      {
        page_chapter1: chapter1,
        page_chapter2: chapter2,
        page: pathname,
        site_level2: "84",
      },
    ]);

    console.log("Piano Analytics event added to queue:", {
      page_chapter1: chapter1,
      page_chapter2: chapter2,
      page: pathname,
    });
  }, [pathname, chapter1, chapter2]);

  return (
    <Script
      id="_madlab_atinternet"
      dangerouslySetInnerHTML={{
        __html: `
        function getPurposes() {
          var cs = RegExp('ext_lmd_consent=[^;]+').exec(document.cookie);
          if (cs) {
            try {
              const cc = JSON.parse(decodeURIComponent(cs?cs.toString().replace(/^[^=]+./,''):''));
              if(cc.purposes){
                return cc.purposes;
              }
            } catch(e) {
              return false;
            }
          }
          return false;
        }

        function setPrivacy() {
          if (!window.pa || !window.pa.privacy) return;

          var pianoPrivacyMode = window.pa.privacy.getMode();
          if (pianoPrivacyMode === 'optout') return;

          var p = getPurposes();
          if (p !== false && p.analytics && p.analytics === true && pianoPrivacyMode !== 'optin') {
              window.pa.privacy.setMode('optin');
          } else {
              window.pa.privacy.setMode('exempt');
          }
        }

        function includePianoExemptProperties() {
          var properties = [
          'site_level2',
          ];
          window.pa.privacy.include.properties(properties, ['exempt']);
        }

        function loadPianoScript(e,t) {
          var n = document.createElement("script");
          n.type = "text/javascript",n.async=!0,n.src=e,n.onload=function(){t&&"function"==typeof t&&t(n)},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(n,null)
        }

        function sendPianoEvent() {
          window.pa.setConfigurations({
            site: 43260,
            cookieDomain: 'buf.lemonde.fr',
            collectDomain:'https://buf.lemonde.fr',
            path: 'lmd',
            campaignPrefix: ['lmd_', 'at_', 'utm_'],
            enableUTMTracking: true
          });
          setPrivacy();
          includePianoExemptProperties();
          console.log('Piano Analytics configuration set and privacy settings applied.');
          
          const AT_CHAPTER1 = "${chapter1}";
          const AT_CHAPTER2 = "${chapter2}";
          const AT_NAME = "${pathname}";

          console.log('Piano Analytics event sent:', {page_chapter1: AT_CHAPTER1, page_chapter2: AT_CHAPTER2, page: AT_NAME});
          
          window.pa.sendEvent('page.display', {page_chapter1: AT_CHAPTER1, page_chapter2: AT_CHAPTER2, page: AT_NAME, site_level2: "84"});
          window.MAD_AT_IS_LOADED = true;
        }

        var src = "https://tag.aticdn.net/piano-analytics.js";
        // Setup Piano before load
        window._pac = window._pac || {};
        window._pac.privacyDefaultMode = 'exempt';
        window._pac.isVisitorClientSide = false;
        loadPianoScript(src,sendPianoEvent);
        console.log('Piano Analytics script init.');
        `,
      }}
    ></Script>
  );
}
