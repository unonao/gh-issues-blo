import * as React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 240, height = 80 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      width={width}
      height={height}
      objectFit="contain"
      alt="logo"
    />
  );
}
