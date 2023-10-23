import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function constructMetadata({
  title = "Hrushikesh Borhade",
  description = "Creative Developer.Impacting the world through Code, Design and Open Source.",
  image = "/thumbnail.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@BorhadeHrushi",
    },
    metadataBase: new URL("https://www.hrushiborhade.me/"),
    themeColor: "#000",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
