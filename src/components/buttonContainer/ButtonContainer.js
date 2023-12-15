export default function ButtonContainer() {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "col-span-2 flex items-center justify-center"
  );

  container.innerHTML = '<div class="w-4/5" id="paypal-container"></div>';

  return container;
}
