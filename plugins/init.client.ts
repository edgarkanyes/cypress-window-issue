export default defineEventHandler(() => {
  if (window.Cypress) {
    window.appReady = true;
  }
});
