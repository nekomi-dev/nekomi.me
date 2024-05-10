<template>
  <div v-if="loading">
    <BlockNavigation></BlockNavigation>
    <NuxtPage></NuxtPage>
  </div>
  <div class="loaderScreen" v-else>
    <UILoader></UILoader>
  </div>
</template>

<style>
.loaderScreen {
  display: flex;
  width: 100%;
  height: 97vh;
  justify-content: center;
  align-items: center;

  overflow-y: hidden;
}
</style>

<script setup>
const loading = ref(false);
onMounted(() => {
  loading.value = true;
});
</script>
