import { NextRequest } from "next/server";

const SCRIPT_BASE_URL = "https://www.lathamprositetool.com/wp-json/latham/v1/embed/3431/4/grid";

const buildHtml = (targetPath: string, cacheBuster: string) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        background: #ffffff;
      }
      #latham-embed-3431-4-grid {
        width: 100%;
        min-height: 800px;
      }
    </style>
  </head>
  <body>
    <div id="latham-embed-3431-4-grid"></div>
    <script>
      (function () {
        var origin = window.location.origin;
        var targetPath = ${JSON.stringify(targetPath)};
        var cacheBuster = ${JSON.stringify(cacheBuster)};
        var targetUrl = origin + targetPath;
        var requestUrl = "${SCRIPT_BASE_URL}/" + targetUrl + (targetUrl.indexOf("?") >= 0 ? "&" : "?") + "_cb=" + cacheBuster;

        var post = function (type, extra) {
          var payload = Object.assign({ type: type }, extra || {});
          window.parent.postMessage(payload, origin);
        };

        var postHeight = function () {
          var bodyHeight = document.body ? document.body.scrollHeight : 0;
          var docHeight = document.documentElement ? document.documentElement.scrollHeight : 0;
          var maxHeight = Math.max(bodyHeight, docHeight, 800);
          post("latham-grid-height", { height: maxHeight });
        };

        var observer = new MutationObserver(function () {
          postHeight();
        });

        observer.observe(document.body, { childList: true, subtree: true, attributes: true });

        var script = document.createElement("script");
        script.async = true;
        script.src = requestUrl;
        script.onload = function () {
          post("latham-grid-loaded");
          setTimeout(postHeight, 400);
          setTimeout(postHeight, 1500);
          setTimeout(postHeight, 3000);
        };
        script.onerror = function () {
          post("latham-grid-error");
        };

        var firstScript = document.getElementsByTagName("script")[0];
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        } else {
          document.head.appendChild(script);
        }

        window.addEventListener("load", function () {
          postHeight();
        });
      })();
    </script>
  </body>
</html>
`;

export const dynamic = "force-dynamic";

export const GET = (request: NextRequest) => {
  const cb = request.nextUrl.searchParams.get("cb") ?? `${Date.now()}`;
  const targetParam = request.nextUrl.searchParams.get("target") ?? "/pool-selection";
  const targetPath = targetParam.startsWith("/") ? targetParam : "/pool-selection";

  const html = buildHtml(targetPath, cb);

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
};
