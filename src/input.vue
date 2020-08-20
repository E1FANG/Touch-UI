<template>
  <div class="wrapper" :class="{error}">
      <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
      <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
      </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
    components:{Icon},
    name:"PlayInput",
    props:{
        value:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            defult:false
        },
        error:{
            type:String
        }
    }
}
</script>

<style lang="scss" scoped>
    $height:32px;
    $font-size:14px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#F1453D;
    .wrapper{
        display: inline-flex;
        align-items: center;
        font-size: $font-size;
        >:not(:last-child) {margin-right: 0.5em;}
        >input{
            height: $height;
            padding:0 8px;
            font-size:inherit; //这样就会自动继承wrapper的font-size
            border: 1px solid $border-color;
            border-radius: $border-radius;
            &:hover {
                border-color:$border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly]{
                border-color:#bbb;
                color:#bbb;
                cursor: not-allowed;
            }
        }
        &.error{
        >input{border-color: $red;}
        }
        .icon-error{
            fill: $red;
        }
        .errorMessage{
            color:$red;
        }
    }
</style>