import * as React from "react";
import Image from "next/image";
import { makeImagePath } from "../lib/imagePath";
interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 240, height = 80 }: LogoProps) {
  return (
    <Image
      src={makeImagePath("logo.png")}
      width={width}
      height={height}
      alt="logo"
    />
  );
}
