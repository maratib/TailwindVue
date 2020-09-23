// import Vue from "vue";
import TContainer from './components/TContainer.vue';
import TAlert from './components/TAlert.vue';
// const app = Vue.createApp({});
// app.component(Test.name, Test);
// export default Test;

export default function register(app: any) {
  app.component('t-container', TContainer);
  app.component('t-alert', TAlert);
}