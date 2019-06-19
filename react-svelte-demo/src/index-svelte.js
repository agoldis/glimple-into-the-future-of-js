import App from "./svelte/App.svelte";

const app = new App({
  target: document.getElementById("svelteApp"),
  props: {
    name: "world"
  }
});

export default app;
