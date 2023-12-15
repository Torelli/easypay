export default function displayResultMessage(message, isError = true) {
  const resultContainer = document.querySelector("#result-message-container");
  const resultMessage = document.querySelector("#result-message");
  const btnCloseResult = document.querySelector("#close-result-message")
    .children[0];

  if (!isError) {
    resultContainer.classList.replace("bg-red-100", "bg-green-100");
    resultContainer.classList.replace("border-red-400", "border-green-400");
    resultContainer.classList.replace("text-red-700", "text-green-700");
    btnCloseResult.classList.replace("text-red-500", "text-green-500");
  } else {
    resultContainer.classList.replace("bg-green-100", "bg-red-100");
    resultContainer.classList.replace("border-green-400", "border-red-400");
    resultContainer.classList.replace("text-green-700", "text-red-700");
    btnCloseResult.classList.replace("text-green-500", "text-red-500");
  }

  resultContainer.classList.remove("hidden");
  resultMessage.innerText = message;
}
