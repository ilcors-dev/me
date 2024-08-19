import classNames from "classnames";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "memojis/7e539d2c025d7d4e48fbd6607da77b48-sticker.png",
  },
  authors: {
    name: "Luca Corsetti",
    url: "https://www.linkedin.com/in/lucacorsettidev",
  },
  keywords: [
    "software engineer",
    "full-stack developer",
    "frontend developer",
    "backend developer",
    "Rust developer",
    "TypeScript developer",
    "JavaScript developer",
    "cloud computing",
    "web development",
    "Bologna Italy",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@llcors",
    creator: "@llcors",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    countryName: "Italy",
    images: "memojis/7e539d2c025d7d4e48fbd6607da77b48-sticker.png",
    siteName: "Luca Corsetti personal website",
    description: "A software engineer from Italy, Bologna.",
    url: "https://ilcors.dev",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <Script src="https://sa.ilcors.dev/latest.js" data-collect-dnt="true" />
      </head>
      <body
        className={classNames(
          "relative m-0 flex h-screen flex-col bg-white dark:bg-black dark:text-white",
          inter.className,
        )}
      >
        <div className="relative transition-all duration-300">
          {/* <ThemeSwitcher className="absolute right-4 z-10" /> */}
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
