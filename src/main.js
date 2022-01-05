import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import installAntd from "./plugins/antdv";
import "./styles/antdv/theme.less";
import "./styles/index.scss";

const app = createApp(App);
installAntd(app);

app.use(store).use(router).mount("#app");
