export default function initializeResultListeners() {
  const btnCloseResult = document.querySelector("#close-result-message");
  const resultContainer = document.querySelector("#result-message-container");

  btnCloseResult.addEventListener("click", () => {
    resultContainer.classList.add("hidden");
  });
}
