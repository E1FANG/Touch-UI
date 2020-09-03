<template>
    <div class="col" :class="[span &&`col-${span}`,offset && `offset-${offset}`]"
        :style="{paddingLeft:gutter/2+'px',paddingRigth:gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TCol',
    props:{
        span:{
            type: [Number,String]
        },
        offset:{
            type:[Number,String]
        }
    },
    data(){
        return{
            gutter:0
        }
    }
}
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        background: grey;
        width: 50%;
        border:1px solid red;

        //sass循环用法
        $class-prefix: col-;           // classprefix 相当于 前缀
        @for $n from 1 to 24 {         // 循环 从1到24
            &.#{$class-prefix}#{$n}{   //#{} 相当于 es6的${} 取花括号里面的值 
                                       // 这里也算是拼接 ： 前缀加后缀
                width:($n /24) * 100%
            }
        }
        $class-prefix: offset-;          
        @for $n from 1 to 24 {        
            &.#{$class-prefix}#{$n}{  
                margin-left:($n /24) * 100%
            }
        }
    }
</style>