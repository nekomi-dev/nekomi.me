<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtPage></NuxtPage>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/imports";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translate(0, 50px);
}

.slide-left-enter-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active,
.slide-left-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-down-enter-from {
  opacity: 0;
  transform: translate(0, 50px);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translate(0, 50px);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translate(0, -50px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}
</style>
