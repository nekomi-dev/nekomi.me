<template>
  <div>
    <VitePwaManifest />
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
}
</style>
