document
  .getElementById("open-model-btn")
  .addEventListener("click", function () {
    document.getElementById("my-model").classList.add("open");
  });

document
  .getElementById("close-model-btn")
  .addEventListener("click", function () {
    document.getElementById("my-model").classList.remove("open");
  });

document
  .querySelector("#my-model .model-item")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.getElementById("my-model").addEventListener("click", (event) => {
  if (event.isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
