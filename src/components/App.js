import CheckoutContainer from "./checkoutContainer/CheckoutContainer";
import Toolbar from "./toolbar/Toolbar";
import { loadScript } from "@paypal/paypal-js";

export default function () {
  document.body.appendChild(Toolbar());
  document.body.appendChild(CheckoutContainer());

  loadScript({
    clientId:
      "ATHk4BGa5jIYNAoKl17UpzirMfLQE2V97wj31VxvWCdAP91oyuD-N2kol2hZWrd0J-N2de6gPCo-tgRn",
    locale: "en_US",
    buyerCountry: "US",
  })
    .then((paypal) => {
      paypal
        .Buttons()
        .render("#paypal-container")
        .catch((error) => {
          console.error("failed to render the PayPal Buttons", error);
        });
    })
    .catch((error) => {
      console.error("failed to load the PayPal JS SDK script", error);
    });
}
