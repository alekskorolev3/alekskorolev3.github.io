import {createApp} from 'vue'
import App from './App.vue'
import VueDnDKitPlugin from '@vue-dnd-kit/core';
import {createPinia} from "pinia";
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import axios from "axios";
import {API_KEY} from "@/const/index.js";
import VFocus from "@/components/directives/VFocus.js";

const app = createApp(App)
const pinia = createPinia()
app.use(VueDnDKitPlugin)
app.use(pinia)
app.use(ToastPlugin)

app.directive('focus', VFocus)

axios.interceptors.request.use(function (config) {
    config.params.key = API_KEY
    return config
}, function (error) {
    return Promise.reject(error);
})


app.mount('#app')
