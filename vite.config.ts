import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "fumadocs-mdx/vite";
import * as MdxConfig from "./source.config";
// import { createPreset } from "fumadocs-ui/tailwind-plugin";

export default defineConfig({
  plugins: [
    mdx(MdxConfig),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths({
      root: __dirname,
    }),
    // createPreset({
    //   cssPrefix: "fuma-", // here!
    // }),
  ],
});
