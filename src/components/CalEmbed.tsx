"use client";

import { useEffect } from "react";

interface CalEmbedProps {
  calLink: string; // e.g. "nidhiabroad/15min"
  elementId: string;
}

export default function CalEmbed({ calLink, elementId }: CalEmbedProps) {
  useEffect(() => {
    // Load Cal.com embed script once
    if (typeof window === "undefined") return;

    const existing = document.querySelector('script[data-cal-embed]');
    if (!existing) {
      const script = document.createElement("script");
      script.setAttribute("data-cal-embed", "true");
      script.innerHTML = `
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal; let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {}; cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              typeof namespace === "string"
                ? (cal.ns[namespace] = api) && p(api, ar)
                : p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", { origin: "https://cal.com" });
      `;
      document.head.appendChild(script);
    }

    // Small delay to let embed.js load, then init the inline calendar
    const timer = setTimeout(() => {
      if (window.Cal) {
        window.Cal("inline", {
          elementOrSelector: `#${elementId}`,
          calLink,
          layout: "month_view",
        });
        window.Cal("ui", {
          styles: { branding: { brandColor: "#9B6DFF" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [calLink, elementId]);

  return (
    <div
      id={elementId}
      style={{ width: "100%", minHeight: 600, borderRadius: 16, overflow: "hidden" }}
    />
  );
}
