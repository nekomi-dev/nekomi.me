export default defineNuxtPlugin((nuxtApp) => {
  // Выполняем только на клиенте после hydration
  if (process.client) {
    nuxtApp.hook("app:mounted", () => {
      const { updateAuth } = useAuth();
      updateAuth();
    });
  }
});
