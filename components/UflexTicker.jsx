"use client";

import React from "react";

const UflexTicker = () => {
  return (
    <iframe
      referrerPolicy="origin"
      width="100%"
      height="150"
      style={{
        background: "#FFFFFF",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
      }}
      src="https://jika.io/embed/single-ticker?symbol=UFLEX.NS&boxShadow=true&textColor=161c2d&backgroundColor=FFFFFF&fontFamily=Nunito&"

    />
  );
};

export default UflexTicker;
