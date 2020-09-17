<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TouchTabsHead",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on('update:selected', item=>{
      console.log(item)
    })
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue:blue;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  position: relative;
  height: $tab-height;
  border: 1px solid red;
  >.line{
    position: absolute;
    bottom:0;
    width: 100px;
    border-bottom:1px solid $blue;
  }
  > .actions-wrapper {
      //设置margin-left auto，action就自动在最右边
    margin-left: auto;
  }
}
</style>