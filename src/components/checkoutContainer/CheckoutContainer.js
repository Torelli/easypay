import Cart from "../cart/Cart";

export default function CheckoutContainer() {
    const container = document.createElement("div");
    container.setAttribute("class", "mt-56 w-1/3 p-4 bg-gray-200 drop-shadow-2xl rounded-md");

    container.appendChild(Cart());

    return container;

}