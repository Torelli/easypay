import Items from "./Items";

export default function Cart() {
  const container = document.createElement("div");
  container.setAttribute("class", "p-4");
  container.innerHTML = `
    <h2 class="mb-2 text-3xl text-left font-semibold text-gray-600 border-b-2 border-b-slate-600">Your cart</h2>
  `;

  const items = [
    {
      name: "Throwback Hip Bag",
      picture:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
      price: "U$100.00",
    },
  ];

  container.appendChild(Items(items));

  return container;
}
