import AnimateAfterScrolled from "@/components/animations/AnimateAfterScrolled";
import AnimateScroll from "@/components/animations/AnimateScroll";
import Header from "@/components/layout/Header";
import Navigation from "@/components/shared/Navigation";
import { env } from "@/lib/env";
import "@/styles/globals.css";

import { Roboto, Frank_Ruhl_Libre } from "next/font/google";

const roboto = Roboto({
  style: ["italic", "normal"],
  weight: ["300", "400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  style: ["normal"],
  weight: ["300", "400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  metadataBase: new URL(env.BASE_URL),
  title: {
    template: "| UNTITLED BRAND |",
    default: "| UNTITLED BRAND |",
  },
  description: "",
  icons: [
    {
      rel: "icon",
      url: `${env.BASE_PATH}/favicon.png`,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`font-sans ${roboto.variable} ${frankRuhlLibre.variable}`}>
        <AnimateScroll />
        <Header
          partenaireLogo={
            <img src={`${env.BASE_PATH}/assets/info.svg`} width={28} height={28} alt="Logo" />
          }
          partenaireURL="/">
          <AnimateAfterScrolled>
            <Navigation intent="header" />
          </AnimateAfterScrolled>
        </Header>
        <main className="min-h-svh pt-[var(--header-height)]">{children}</main>
      </body>
    </html>
  );
}
