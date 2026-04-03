import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (desc) desc.content = description;

    // OG title
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;

    // OG description
    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // OG url
    if (canonical) {
      let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
      if (ogUrl) ogUrl.content = canonical;

      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (link) link.href = canonical;
    }

    // OG image
    if (ogImage) {
      let ogImg = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
      if (ogImg) ogImg.content = ogImage;
    }

    // Twitter
    let twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = title;

    let twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = description;
  }, [title, description, canonical, ogImage]);
}
