import Header from "@/components/templateComponent/Header";
import { env } from "@/lib/env";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Bitter, Roboto } from "next/font/google";
import Script from "next/script";
// import Cookies from "@/components/templateComponent/Cookies";
import LazySvg from "@/components/svgComponent/LazySvg";
import ATInternet from "@/components/templateComponent/ATInternet";
import styles from "./layout.module.scss";
import { useEffect } from "react";
import { ContextProvider } from "@/components/context/Context";
// import Cookies from "@/components/templateComponent/Cookies";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-bitter",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.BASE_URL),
  title: {
    template: "%s | Le Monde",
    default: "L'Oréal, la beauté créatrice | Le Monde",
  },
  description: "« Créer la beauté qui fait avancer le monde », telle est la raison d’être de L’Oréal.",
  icons: [
    {
      rel: "icon",
      url: `${env.BASE_PATH}/favicon.png`,
    },
  ],
  openGraph: {
    type: "website",
    url: "https://www.lemonde.fr",
    title: "L'Oréal, la beauté créatrice | Le Monde",
    description: "« Créer la beauté qui fait avancer le monde », telle est la raison d’être de L’Oréal.",
    siteName: "Boilerplate MPublicité",
    images: [
      {
        url: `${env.BASE_PATH}/og/loreal-opengraph.jpg`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lemondefr",
    creator: "@matt_ojs",
    images: `${env.BASE_PATH}/og/loreal-twitter.jpg`,
    title: "L'Oréal, la beauté créatrice | Le Monde",
    description: "« Créer la beauté qui fait avancer le monde », telle est la raison d’être de L’Oréal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body className={`${roboto.variable} ${bitter.variable}`}>
        <ContextProvider>
          <Header
            logoBrand={
              <a href="https://www.loreal.com/fr/groupe/" target="_blank" rel="noreferrer">
                <LazySvg name="loreal-groupe" width={90} height={58} />
              </a>
            }
            isMenu={true}
          />
          <main className={styles.main}>{children}</main>
          <Script src="https://cmp.lemonde.fr/js/tcfv2-stub.min.js"></Script>
          <Script async src="https://cmp.lemonde.fr/js/lemonde.min.js"></Script>
          <ATInternet chapter1="loreal" chapter2="loreal.lemonde.fr" />
        </ContextProvider>
      </body>
    </html>
  );
}
