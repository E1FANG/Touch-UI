<template>
    <div class="collapseItem">
        <div class="title" @click="open =!open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"TouchCollapseItem",
    props:{
        title:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            open:false
        }
    }
}
</script>

<style lang="scss" scoped>
$grey:#ddd;
$border-radius:4px;
.collapseItem{
    >.title{
        display: flex;
        align-items: center;
        margin: -1px;
        margin-bottom:0px;
        min-height: 32px;
        padding: 0 8px;
        border: 1px solid $grey;
        // border-radius: $border-radius;
    }
    &:first-child{
        >.title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    &:last-child{
        >.title:last-child{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
    >.content{
        padding: 0 8px;
    }
}
</style>