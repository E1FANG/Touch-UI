<template>
  <svg class="t-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
    .t-icon {
      width: 1em;
      height: 1em;
    }
</style>
