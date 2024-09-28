const baseConfig =
  process.env.BUILD_DEST === "preview"
    ? {
        basePath: process.env.NODE_ENV === "production" ? "" : "",
        env: {
          BASE_PATH: process.env.NODE_ENV === "production" ? "" : "",
          BASE_URL: "https://madlab.mpublicite.fr",
        },
      }
    : {
        env: {
          BASE_PATH: "",
          BASE_URL: "https://destination-usa.lemonde.fr",
        },
      };

/** @type {import("next").NextConfig} */
const config = {
  ...baseConfig,
  output: "export",
  trailingSlash: true,

  // Custom Webpack configuration
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/i, // File extensions to process (.glsl, .vs, .fs)
      exclude: /node_modules/, // Exclude node_modules
      use: [
        {
          loader: 'webpack-glsl-loader', // Use the webpack-glsl-loader
        },
      ],
    });

    return config;
  },
};

export default config;
