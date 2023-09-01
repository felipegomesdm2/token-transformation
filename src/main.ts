import "./index.css";
import App from "./App.svelte";

let app;

const target = document.getElementById("app");

if (target) {
  app = new App({
    target,
  });
}

export default app;
