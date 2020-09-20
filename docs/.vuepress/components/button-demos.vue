<template>
  <div>
    <t-button icon="settings">按钮</t-button>
    <t-button :loading="loading" @click="loading=!loading">按钮</t-button>
    <t-button icon="settings" icon-position="right">按钮</t-button>
    <t-button disabled>失效按钮</t-button>
  </div>
</template>

<script>
import Button from '../../../src/button'
export default {
    components:{
        tButton:Button
    },
    data(){
        return{
            loading:true
        }
    }
}
</script>

<style>

</style>