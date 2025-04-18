<template>
  <button
    :class="[classes, { disabled: props.disabled }]"
    :disabled="props.disabled"
    :type="props.type"
    @click="props.onClick"
  >
    <slot></slot>
    <div v-if="$slots.tooltip && !isMobile" class="tooltip-container">
      <div
        class="tooltip-content"
        :class="{ 'tooltip-bottom': props.tooltipBottom }"
      >
        <slot name="tooltip"></slot>
      </div>
    </div>
  </button>
</template>
<script setup>
const { isMobile } = useDevice();

const props = defineProps({
  typeStyle: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
  },
  onClick: {
    type: Function,
  },
  tooltipBottom: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => ({
  button: true,
  transparent: props.typeStyle.includes("transparent"),
  icon: props.typeStyle.includes("icon"),
  blue: props.typeStyle.includes("blue"),
  blueed: props.typeStyle.includes("blueed"),
  darkeed: props.typeStyle.includes("darkeed"),
  border: props.typeStyle.includes("border"),
  small: props.typeStyle.includes("small"),
  nav: props.typeStyle.includes("nav"),
  noInteractive: props.typeStyle.includes("no-interactive"),
}));
</script>
<style lang="scss" scoped>
.button {
  cursor: pointer;

  padding: 8px 10px;
  border-radius: 8px;
  color: var(--white);
  font-size: 14px;
  transition: var(--transition);
  background: var(---gray);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 0.7px solid transparent;

  &:hover {
    background: var(---light-black);
  }
}

.disabled {
  cursor: not-allowed;
}

.noInteractive {
  pointer-events: none;
}

.transparent {
  @extend .button;

  backdrop-filter: blur(20px);
  background: rgba(213, 255, 255, 0.2);

  &:hover {
    background: var(--black-secondary);
    backdrop-filter: unset;
  }
}

.icon {
  @extend .button;

  padding: 10px;
}

.blue {
  @extend .button;

  border: unset;
  background: var(--light-blue);
}

.blueed {
  @extend .button;

  background: rgba(55, 110, 255, 0.2);
}

.darkeed {
  @extend .button;

  background: rgba(17, 17, 17, 0.2);
}

.small {
  @extend .button;

  padding: 4px 10px;
}

.nav {
  @extend .button;

  background: transparent;
  color: var(--white-alpha50);

  &:deep svg {
    path {
      fill: var(--white-alpha50);

      transition: var(--transition);
    }
  }

  & ~ .blue {
    &:hover {
      background: var(--dark-blue);
    }
  }

  &:hover {
    background: var(--gray);
  }

  &:active {
    background: var(--light-gray);
    border: 0.7px solid var(--white-alpha10);
    color: var(--white);

    &:deep svg {
      path {
        fill: var(--white);
      }
    }
  }

  .router-link-active,
  .router-link-exact-active {
    background: var(--light-gray);
    border: 0.7px solid var(--white-alpha10);
    color: var(--white);
  }
}

.tooltip-container {
  position: absolute;
}

.button {
  position: relative;

  &:hover {
    .tooltip-content {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }
}

.tooltip-content {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(5px);

  padding: 8px 12px;
  background: var(--gray);
  border: 0.7px solid var(--white-alpha10);
  border-radius: 8px;

  color: var(--white-alpha50);
  font-size: 14px;
  white-space: nowrap;

  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;

  &.tooltip-bottom {
    bottom: unset;
    top: calc(100% + 20px);
    transform: translateX(-50%) translateY(-5px);

    &:hover {
      transform: translateX(-50%) translateY(0);
    }
  }
}
</style>
