document
  .getElementById("open-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open");
  });

document
  .getElementById("close-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open");
  });

document
  .querySelector("#my-modal .modal-item")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.getElementById("my-modal").addEventListener("click", (event) => {
  if (event.isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
