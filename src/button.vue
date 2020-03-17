
<template>
  <button
    class="t-button"
    :class="{[`icon-${iconPosition}`] : true}"
    @click="$emit(click)"
  >
    <t-icon v-if="icon && !loading" class="icon" :name="icon" />
    <t-icon v-if="loading" class="loading icon" name="jiazai" />
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  // props: ["icon", "iconPosition"]
  components: {
    't-icon': Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes spin {
  0% { transform: rotate(0edg) ;}
  100% { transform: rotate(360edg); }
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
  .loading{
    animation: spin 2s infinite linear;
  }
}
</style>
