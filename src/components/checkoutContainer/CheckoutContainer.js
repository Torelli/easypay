import ButtonContainer from "../buttonContainer/ButtonContainer";
import Cart from "../cart/Cart";
import Form from "../form/Form";

export default function CheckoutContainer() {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "grid grid-cols-2 gap-2 mt-32 w-1/2 p-4 bg-gray-200 drop-shadow-2xl rounded-md"
  );

  container.appendChild(Cart());
  container.appendChild(Form());
  container.appendChild(ButtonContainer());

  return container;
}
