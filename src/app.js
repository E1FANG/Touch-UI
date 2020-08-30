import Vue from "vue";
import Button from "./button.vue";
import Icon from './icon.vue'
import Input from './input.vue'

Vue.component("pl-button", Button);
Vue.component("pl-icon", Icon)
Vue.component("pl-input", Input)

new Vue({
  el: "#app",
  data:{
    loading1:false
  },
  methods:{
    inputChange(e){
      console.log(e)
    }
  }
});
