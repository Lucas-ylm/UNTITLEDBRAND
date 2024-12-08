import { env } from "@/lib/env";
import "@/styles/globals.scss";

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
        <main className="">{children}</main>
      </body>
    </html>
  );
}
