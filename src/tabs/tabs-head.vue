<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <!-- v-if会控制div是否显示在DOM里 -->
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TouchTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
        let { width, height, top, left } = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.transform = `translateX(${left - 21}px)`;
      });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  position: relative;
  height: $tab-height;
  // border: 1px solid red;
  > .line {
    position: absolute;
    bottom: 0;
    // width: 100px;
    border-bottom: 1px solid $blue;
    transition: all 300ms;
  }
  > .actions-wrapper {
    //设置margin-left auto，action就自动在最右边
    margin-left: auto;
  }
}
</style>