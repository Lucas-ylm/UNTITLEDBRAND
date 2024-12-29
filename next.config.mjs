const baseConfig =
  process.env.BUILD_DEST === "preview"
    ? {
        basePath: process.env.NODE_ENV === "production" ? "/clients/loreal-2025" : "",
        env: {
          BASE_PATH: process.env.NODE_ENV === "production" ? "/clients/loreal-2025" : "",
          BASE_URL: "https://madlab.mpublicite.fr/clients/loreal-2025",
        },
      }
    : {
        env: {
          BASE_PATH: "",
          BASE_URL: "https://fait-pour-durer.lemonde.fr",
        },
      };

/** @type {import("next").NextConfig} */
const config = {
  ...baseConfig,
  output: "export",
  trailingSlash: true,
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    // @ts-ignore
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default config;
