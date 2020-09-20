<template>
  <svg class="t-icon" v-if="name">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
import './svg'
export default {
  // name:'TouchIcon',
  props:['name']
}
</script>

<style lang="scss" scoped>
    .t-icon{
        width: 1em;
        height: 1em;
    }
</style>