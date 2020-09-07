<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "TCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    // phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      let phoneClass = [];
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        // ...(phone ? [`col-phone-${phone.span}`] : []),
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(widePc ? [`col-widePc-${widePc.span}`] : []),
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRigth: this.gutter / 2 + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  //sass循环用法
  $class-prefix: col-; // classprefix 相当于 前缀
  @for $n from 1 to 24 {
    // 循环 从1到24
    &.#{$class-prefix}#{$n} {
      //#{} 相当于 es6的${} 取花括号里面的值
      // 这里也算是拼接 ： 前缀加后缀
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 to 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  // phone为默认
  // @media (max-width: 576px) {
  //   $class-prefix: col-phone-;
  //   @for $n from 1 to 24 {
  //     &.#{$class-prefix}#{$n} {
  //       width: ($n / 24) * 100%;
  //     }
  //   }
  //   $class-prefix: offset-phone-;
  //   @for $n from 1 to 24 {
  //     &.#{$class-prefix}#{$n} {
  //       margin-left: ($n / 24) * 100%;
  //     }
  //   }
  // }
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 to 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 to 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px)  {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 to 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 to 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 to 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 to 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 to 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 to 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>