import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

const production = true;

const svelteConfig = {
  input: "src/index-svelte.js",
  output: {
    sourcemap: true,
    name: "svelteApp",
    file: "dist/js/svelte.bundle.mjs",
    format: "esm"
  },
  plugins: [
    resolve({ browser: true }),
    svelte({
      dev: !production,
      css: css => {
        css.write("dist/css/svelte.bundle.css");
      }
    }),
    production && terser()
  ]
};

const reactConfig = {
  input: "src/index-react.js",
  output: {
    sourcemap: true,
    name: "reactApp",
    file: "dist/js/react.bundle.mjs",
    format: "esm"
  },
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      )
    }),
    production && terser()
  ]
};
export default [svelteConfig, reactConfig];
