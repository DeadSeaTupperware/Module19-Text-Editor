/* DEPENDENCIES */
const butInstall = document.getElementById("buttonInstall");

/* EVENT LISTENERS */
/* Before install, store triggered events and show hidden button */
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
  console.log("Meep 1");
});

/* When user clicks install button, show prompt and then reset prompt */
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();
  window.deferredPrompt = null; // Deferred prompt can only be used once, so reset
  butInstall.classList.toggle("hidden", true);
  console.log("Meep 2");
});

/* Once app is installed, clear prompt */
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
  console.log("Meep 3");
});

console.log("Meep 4");
