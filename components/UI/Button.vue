<template>
  <button
    :class="classes"
    :disabled="props.disabled"
    :type="props.type"
    @click="props.onClick"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps({
  typeStyle: {
    type: Array,
    default: () => [],
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
});

const classes = computed(() => ({
  button: true,
  transparent: props.typeStyle.includes("transparent"),
  icon: props.typeStyle.includes("icon"),
  blue: props.typeStyle.includes("blue"),
  border: props.typeStyle.includes("border"),
  small: props.typeStyle.includes("small"),
  nav: props.typeStyle.includes("nav"),
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
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: var(---light-black);
  }
}

.transparent {
  @extend .button;

  backdrop-filter: blur(20px);

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
      background: var(--gray);
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
</style>
