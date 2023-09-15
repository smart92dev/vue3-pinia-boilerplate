import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// .github/FUNDING.yml
// github: [smart92dev]
// custom: ['buymeacoffee.com/smart92dev', 'revolut.me/smart92dev']
