<template>
  <button class="t-button" :class="{[`icon-${iconPosition}`] : true}">
    <t-icon :name="icon" class="loading"></t-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
// import Icon from './icon'
export default {
  // components:{
  //   "t-icon":Icon
  // },
  props: ["icon", "iconPosition"]
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.t-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    line-height: var(--button-height);
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
