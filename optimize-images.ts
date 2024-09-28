import sharp from "sharp";
import { glob } from "glob";
import { readFile } from "fs/promises";

type ConfigSizes =
  | Array<number>
  | {
      ratio: number;
      widths: Array<number>;
    };
type ConfigObject = {
  path: string[];
  sizes: Record<string, ConfigSizes> | ConfigSizes;
};
type ConfigResize = {
  suffix?: string;
  ratio?: number;
  widths: Array<number>;
};

type Config = Array<ConfigObject>;

const config: Config = [
  {
    path: ["header-*"],
    sizes: {
      desktop: {
        ratio: 1920 / 1080,
        widths: [1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375],
      },
      mobile: {
        ratio: 375 / 550,
        widths: [1280, 1024, 768, 640, 520, 375],
      },
    },
  },
  {
    path: ["image-*"],
    sizes: [1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375],
  },
  {
    path: ["diaporama-*"],
    sizes: [1536, 1280, 1024, 768, 640, 520, 375, 300, 240],
  },
  {
    path: ["grid-top-left-*", "grid-bottom-right-*"],
    sizes: {
      ratio: 1680 / 1152,
      widths: [1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260],
    },
  },
  {
    path: ["grid-bottom-left-*", "grid-top-right-*"],
    sizes: {
      ratio: 1920 / 1320,
      widths: [1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260],
    },
  },
  {
    path: ["grid-top-center-*"],
    sizes: {
      ratio: 1600 / 1040,
      widths: [1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260],
    },
  },
  {
    path: ["grid-bottom-center-*"],
    sizes: {
      ratio: 810 / 1040,
      widths: [810, 768, 640, 520, 375, 300, 260],
    },
  },
];

function configToResizeOptions(
  cfg: Record<string, ConfigSizes> | ConfigSizes,
  suffix?: string,
  ratio?: number
): ConfigResize[] {
  if (Array.isArray(cfg)) {
    return [
      {
        suffix,
        ratio,
        widths: cfg,
      },
    ];
  }

  if ("ratio" in cfg && typeof cfg.ratio === "number" && Array.isArray(cfg.widths)) {
    return [
      {
        suffix,
        ratio: cfg.ratio,
        widths: cfg.widths,
      },
    ];
  }

  return Array.from(Object.entries(cfg)).flatMap(([cfgsuffix, cfgSizes]: [string, ConfigSizes]) =>
    configToResizeOptions(cfgSizes, `${suffix ? suffix + "-" : ""}${cfgsuffix}`)
  );
}

async function resize(path: string, options: ConfigResize[]) {
  const image = await readFile(path);
  await Promise.all(
    options.flatMap((option) =>
      option.widths.map((width) => {
        const pathArray = path.replace("public", "out").split("."); // .replace(".jpg", `-${option.suffix ? option.suffix + "-" : ""}${width}w.jpg`)
        pathArray.pop();
        // const fileName = pathArray.pop();
        const pathName = pathArray.join(".");

        return sharp(image)
          .resize({
            width: width,
            height: option.ratio ? Math.round(width / option.ratio) : undefined,
            // position: sharp.strategy.entropy,
            fit: "cover",
          })
          .webp()
          .toFile(`${pathName}-${option.suffix ? option.suffix + "-" : ""}${width}w.webp`);
      })
    )
  );
}

async function optimize() {
  console.log("[optimizer] init");
  for (const cfg of config) {
    const files = await glob(cfg.path.map((path) => `public/**/${path}`));
    for (const file of files) {
      console.log(`[resize] ${file}`);
      await resize(file, configToResizeOptions(cfg.sizes));
    }
  }
  console.log("[optimizer] ended");
}

void optimize();
