import Vue from "vue";
import Button from "./button.vue";
import Icon from './icon.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component("t-button", Button);
Vue.component("t-icon", Icon)
Vue.component("t-input", Input)
Vue.component("t-row", Row)
Vue.component("t-col", Col)

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
