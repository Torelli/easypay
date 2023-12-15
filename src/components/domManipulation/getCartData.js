export default function getCartData() {
  const itemNames = document.querySelectorAll(".item-name");
  const total = document
    .querySelector("#cart-total")
    .getAttribute("data-total");

  let cart = {};
  cart.total = total;

  let items = [];

  for (let item of itemNames) {
    const id = item.getAttribute("data-id");
    const name = item.innerText;
    const quantity = document.querySelector(`#input-quantity-${id}`).value;
    const price = document
      .querySelector(`#item-price-${id}`)
      .getAttribute("data-price");

    items.push({
      name: name,
      quantity: quantity,
      unit_amount: {
        currency_code: "USD",
        value: price,
      },
    });
  }

  cart.items = items;

  return cart;
}
