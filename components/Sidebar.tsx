import * as React from "react";
import Script from "next/script";

function EmbeddedTwitter() {
  return (
    <>
      <a
        className="twitter-timeline"
        data-theme="light"
        data-height="800"
        href="https://twitter.com/LAIME_AI?ref_src=twsrc%5Etfw"
      >
        Tweets by LAIME_AI
      </a>{" "}
      <Script async src="https://platform.twitter.com/widgets.js" />
    </>
  );
}

export default function Sidebar() {
  return <EmbeddedTwitter />;
}
