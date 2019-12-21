import Vue from "vue";
import App from "../imports/ui/App.vue";
import "./main.html";
import routerFactory from "/imports/routes";
import { jQuery } from "meteor/jquery";

import VueMeteorTracker from "vue-meteor-tracker";

// import vue router
import AppLayout from "/imports/ui/AppLayout.vue";
// App start
Meteor.startup(() => {
  // Start the router
  const router = routerFactory.create();

  // install plugin to Vue
  Vue.use(VueMeteorTracker);
  new Vue({
    router,
    render: h => h(AppLayout)
  }).$mount("#app");
});
