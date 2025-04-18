<template>
  <div>
    <BlockNavigation />
    <NuxtPage />
    <BlockFooter />
    <div v-show="!loading" class="loaderScreen">
      <UILoader />
    </div>
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
