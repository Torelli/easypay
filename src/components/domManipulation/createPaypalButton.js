import { loadScript } from "@paypal/paypal-js";
import checkFormInputs from "./checkFormInputs";
import getCartData from "./getCartData";
import getPayerData from "./getPayerData";
import displayResultMessage from "./displayResultMessage";

export default function createPaypalButton() {
  let cart = {};
  let userInfo = {};

  loadScript({
    clientId:
      "ATHk4BGa5jIYNAoKl17UpzirMfLQE2V97wj31VxvWCdAP91oyuD-N2kol2hZWrd0J-N2de6gPCo-tgRn",
    locale: "en_US",
    buyerCountry: "US",
  })
    .then((paypal) => {
      paypal
        .Buttons({
          onInit: function (data, actions) {
            actions.disable();

            document.querySelector("form").addEventListener("input", () => {
              if (checkFormInputs()) {
                actions.enable();
              } else {
                actions.disable();
              }
            });
          },
          onClick: function () {
            if (!checkFormInputs()) {
              displayResultMessage("You have to fill all the form fields!");
            } else {
            }
          },
          async createOrder() {
            try {
              const cart = getCartData();
              const payerInfo = getPayerData();
              const data = { cart, payerInfo };
              const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });

              const orderData = await response.json();

              if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
              displayResultMessage(
                `Could not initiate PayPal Checkout...<br><br>${error}`
              );
            }
          },
          async onApprove(data, actions) {
            try {
              const response = await fetch(
                `/api/orders/${data.orderID}/capture`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              const orderData = await response.json();

              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                return actions.restart();
              } else if (errorDetail) {
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`
                );
              } else if (!orderData.purchase_units) {
                throw new Error(JSON.stringify(orderData));
              } else {
                const transaction =
                  orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
                  orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
                displayResultMessage(
                  `Thank you for buying with us! Your checkout id is ${transaction.id}`,
                  false
                );
                console.log(
                  "Capture result",
                  orderData,
                  JSON.stringify(orderData, null, 2)
                );
              }
            } catch (error) {
              console.error(error);
              displayResultMessage(
                `Sorry, your transaction could not be processed...<br><br>${error}`
              );
            }
          },
        })
        .render("#paypal-container")
        .catch((error) => {
          console.error("failed to render the PayPal Buttons", error);
        });
    })
    .catch((error) => {
      console.error("failed to load the PayPal JS SDK script", error);
    });
}
