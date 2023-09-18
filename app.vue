<template>
  <NuxtLayout>
    <div>
      <NuxtPage></NuxtPage>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
@import "/assets/scss/variables";
@import "/assets/scss/UI";
@import "/assets/scss/nav";
@import "/assets/scss/home";
@import "/assets/scss/banner";
@import "/assets/scss/carousel";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup>
</script>