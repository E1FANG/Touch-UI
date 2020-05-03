<template>
  <svg class="t-icon" v-if="name">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
    props:['name']
}
</script>

<style lang="scss">
    .t-icon{
        width: 1em;
        height: 1em;
    }
</style>