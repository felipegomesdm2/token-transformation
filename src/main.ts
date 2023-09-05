import "./index.css";
import App from "./App.svelte";

// Components
import "../build/button.css";

let app;

const target = document.getElementById("app");

if (target) {
  app = new App({
    target,
  });
}

export default app;
