import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

import packageJson from "./package.json" assert { type: "json" };

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs({ include: "node_modules" }),
    resolve(),
    babel({ babelHelpers: "bundled", presets: ["@babel/preset-react"] }),
    ,
  ],
};
