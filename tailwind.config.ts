import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      base: "20px",
      xxxs: "280px",
      xxxsss: "300px",
      xxss: "322px",
      xxs: "375px",
      xss: "390px",
      sx: "420px",
      xs: "475px",
      ssm: "500px",
      sm: "571px",
      s: "735px",
      smd: "850px",
      md: "850px",
      lg: "1024px",
      lg2: "1188px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1935px",
    },
    extend: {
      height: {
        fill: "-webkit-fill-available",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold_idf: "var(--gold_idf)",
        blue_jo: "var(--blue_jo)",
        gold_jo: "var(--gold_jo)",
        blue_idf: "var(--blue_idf)",
        red_idf: "var(--red_idf)",
        pink: "var(--pink)",
        light_blue: "var(--light_blue)",
        "brown-light": "var(--brown-light)",
        "cream-light": "var(--cream-light)",
        "cream-lighter": "var(--cream-lighter)",
        "yellow-light": "var(--yellow-light)",
      },
      fontFamily: {
        bitter: ["var(--font-bitter)"],
        roboto: ["var(--font-roboto)"],
      },
      zIndex: {
        5: "5",
      },
    },
  },
  plugins: [],
} satisfies Config;
