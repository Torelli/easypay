import formatPrice from "../../util/formatPrice";

export default function initializeQuantityListeners() {
  const btnsIncreaseQuantity = document.querySelectorAll(
    ".btn-increase-quantity"
  );
  const btnsDecreaseQuantity = document.querySelectorAll(
    ".btn-decrease-quantity"
  );
  const prices = document.querySelectorAll(".prices");
  const cartTotal = document.querySelector("#cart-total");

  for (let button of btnsIncreaseQuantity) {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const priceTag = document.querySelector(`#item-price-${id}`);
      const price = Number(priceTag.getAttribute("data-price"));
      const inputQuantity = document.querySelector(`#input-quantity-${id}`);
      const cartTotal = document.querySelector("#cart-total");
      let total = 0;

      if (inputQuantity.value < 5) {
        inputQuantity.value++;
        priceTag.setAttribute(
          "data-price-quantity",
          `${price * inputQuantity.value}`
        );
        priceTag.innerText = formatPrice(price * inputQuantity.value);
        console.log(Number(cartTotal.getAttribute("data-total")) + price);
        cartTotal.setAttribute("data-total", Number(cartTotal.getAttribute("data-total")) + price);
        cartTotal.innerText = formatPrice(Number(cartTotal.getAttribute("data-total")));
      }
    });
  }

  for (let button of btnsDecreaseQuantity) {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const priceTag = document.querySelector(`#item-price-${id}`);
        const price = Number(priceTag.getAttribute("data-price"));
        const inputQuantity = document.querySelector(`#input-quantity-${id}`);
        const cartTotal = document.querySelector("#cart-total");
        let total = 0;
  
        if (inputQuantity.value > 1) {
          inputQuantity.value--;
          priceTag.setAttribute(
            "data-price-quantity",
            `${price * inputQuantity.value}`
          );
          priceTag.innerText = formatPrice(price * inputQuantity.value);
          console.log(Number(cartTotal.getAttribute("data-total")) - price);
          cartTotal.setAttribute("data-total", Number(cartTotal.getAttribute("data-total")) - price);
          cartTotal.innerText = formatPrice(Number(cartTotal.getAttribute("data-total")));
        }
      });
  }
}
