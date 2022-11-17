/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import * as React from "react";
import Script from "next/script";
import { css } from "@emotion/react";

const twitterHeight = 800;

function EmbeddedTwitter() {
  return (
    <div
      css={css`
        height: ${twitterHeight}px;
      `}
    >
      <a
        className="twitter-timeline"
        data-theme="light"
        data-height={twitterHeight}
        href="https://twitter.com/LAIME_AI?ref_src=twsrc%5Etfw"
      >
        Tweets by LAIME_AI
      </a>{" "}
      <Script async src="https://platform.twitter.com/widgets.js" />
    </div>
  );
}

export default function Sidebar() {
  return <EmbeddedTwitter />;
}
