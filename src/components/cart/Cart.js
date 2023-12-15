import { cartItems } from "../dummyObjects/dummyObjects";
import Items from "./Items";

export default function Cart() {
  const container = document.createElement("div");
  container.classList.add("p-4");
  container.innerHTML = `
    <h2 class="mb-2 text-3xl text-left font-semibold text-gray-600 border-b-2 border-b-slate-600">Your cart</h2>
  `;

  container.appendChild(Items(cartItems));

  return container;
}
