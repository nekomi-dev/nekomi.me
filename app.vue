<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@import "/assets/scss/variables";
@import "/assets/scss/UI";
@import "/assets/scss/nav";
@import "/assets/scss/home";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

body {
  background: var(--eerie-black-2);

  font-family: "SF UI Display";
}
</style>

<script setup>
</script>