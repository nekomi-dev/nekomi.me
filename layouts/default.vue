<template>
  <div v-if="loading">
    <BlockNavigation></BlockNavigation>
    <div
      v-if="
        $pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh
      "
      class="pwa-toast"
      role="alert"
    >
      <div class="message">
        <span> Install PWA </span>
      </div>
      <button @click="$pwa.install()">Install</button>
      <button @click="$pwa.cancelInstall()">Cancel</button>
    </div>
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
