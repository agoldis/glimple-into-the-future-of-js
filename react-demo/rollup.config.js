import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

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
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write("dist/css/svelte.bundle.css");
      }
    })
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
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
};
export default [svelteConfig, reactConfig];
