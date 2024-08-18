import classNames from "classnames";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <link
          rel="icon"
          href="memojis/7e539d2c025d7d4e48fbd6607da77b48-sticker.png"
        />
        <meta
          property="og:image"
          content="memojis/7e539d2c025d7d4e48fbd6607da77b48-sticker.png"
        />
        <meta property="og:url" content="https://ilcors-dev.github.io/me/" />
        <meta name="twitter:card" content="summary_large_image" />
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
