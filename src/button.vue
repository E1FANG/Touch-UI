<template>
  <button class="t-button" :class="{[`icon-${iconPosition}`] : true}">
    <t-icon v-if="icon" :name="icon"></t-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon:{},
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return value === 'left' || value === 'right'
      }
    }
  }
};
</script>

<style lang="scss">
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
}
</style>
