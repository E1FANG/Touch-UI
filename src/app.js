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
import Tabs from './tabs/tabs.vue'
import TabsBody from './tabs/tabs-body.vue'
import TabsHead from './tabs/tabs-head.vue'
import TabsItem from './tabs/tabs-item.vue'
import TabsPane from './tabs/tabs-pane.vue'

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
Vue.component("t-tabs", Tabs)
Vue.component("t-tabs-body", TabsBody)
Vue.component("t-tabs-head", TabsHead)
Vue.component("t-tabs-item", TabsItem)
Vue.component("t-tabs-pane", TabsPane)

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
