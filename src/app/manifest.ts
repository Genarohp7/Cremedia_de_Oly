import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.businessName,
    short_name: "D’Oly",
    description: siteConfig.description,
    start_url: assetPath("/"),
    scope: assetPath("/"),
    display: "standalone",
    background_color: "#080808",
    theme_color: "#080808",
    icons: [
      {
        src: assetPath("/apple-icon.svg"),
        sizes: "180x180",
        type: "image/svg+xml"
      }
    ]
  };
}
