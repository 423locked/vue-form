import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faExclamationCircle, faCheckCircle);

import App from './App.vue'

createApp(App)
    .component("fa-icon", FontAwesomeIcon)
    .mount('.sample')

import 'bootstrap/dist/css/bootstrap.css'