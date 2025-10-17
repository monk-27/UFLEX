// // TradingViewWidget.jsx
// import React, { useEffect, useRef, memo } from "react";

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//         {
//           "symbol": "NSE-UFLEX",
//           "colorTheme": "dark",
//           "isTransparent": true,
//           "locale": "en",
//           "largeChartUrl": "https://www.tradingview.com/symbols/NSE-UFLEX/",
//           "width": 350
//         }`;
//     container.current.appendChild(script);
//   }, []);

//   return (
//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/symbols/NSE-UFLEX/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">UFLEX stock price</span>
//         </a>
//         <span className="trademark"> by TradingView</span>
//       </div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "BSE:UFLEX",
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en",
          "width": 350
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BSE:UFLEX/" rel="noopener nofollow" target="_blank"><span className="blue-text">UFLEX stock price</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
