import Vue from "vue";
import Button from "./button.vue";
import Icon from './icon.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Content from './layout/content.vue'
import Footer from './layout/footer.vue'
import Header from './layout/header.vue'
import Layout from './layout/layout.vue'
import Sider from './layout/Sider.vue'

Vue.component("t-button", Button);
Vue.component("t-icon", Icon)
Vue.component("t-input", Input)
Vue.component("t-row", Row)
Vue.component("t-col", Col)
Vue.component("t-content", Content)
Vue.component("t-footer", Footer)
Vue.component("t-header", Header)
Vue.component("t-layout", Layout)
Vue.component("t-sider", Sider)

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
