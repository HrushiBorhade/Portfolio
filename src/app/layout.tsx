import { cn, constructMetadata } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans, Poppins, Montserrat, Syne } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/header/page";
import Dock from "@/components/Dock";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = constructMetadata();
const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});
const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600"],
});
const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600"],
});
export const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile-2.png" sizes="any" />
      </head>
      <body
        className={cn(
          "font-sans bg-black antialiased text-white",
          fontSans.className,
          fontSans.variable,
          fontHeading.variable,
          fontHeading.className,
          fontSyne.className,
          fontSyne.variable,
          fontPoppins.className,
          fontPoppins.variable,
          fontMontserrat.className,
          fontMontserrat.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
