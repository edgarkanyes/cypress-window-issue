export default defineNuxtPlugin(() => {
  // Here we set the appReady variable on the window object on initial app load
  if (window.Cypress) {
    window.appReady = true;
  }
});
