require("./bootstrap");

import { createApp } from "vue";
import App from "./views/App";
import router from "./router";

createApp(App).use(router).mount("#app");