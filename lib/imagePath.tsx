import getConfig from "next/config";
import path from "path";
const { serverRuntimeConfig } = getConfig();

export function makeImagePath(imgPath: string) {
  const basePath = serverRuntimeConfig.basePath
    ? serverRuntimeConfig.basePath
    : "";
  return path.join("/", basePath, imgPath);
}
