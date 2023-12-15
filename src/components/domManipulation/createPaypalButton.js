import { loadScript } from "@paypal/paypal-js";
import initializeFormListeners from "./checkFormInputs";
import checkFormInputs from "./checkFormInputs";

export default function createPaypalButton() {
  loadScript({
    clientId:
      "ATHk4BGa5jIYNAoKl17UpzirMfLQE2V97wj31VxvWCdAP91oyuD-N2kol2hZWrd0J-N2de6gPCo-tgRn",
    locale: "en_US",
    buyerCountry: "US",
  })
    .then((paypal) => {
      paypal
        .Buttons({
          // onInit is called when the button first renders
          onInit: function (data, actions) {
            // Disable the buttons
            actions.disable();

            // Listen for changes to the form
            document.querySelector("form").addEventListener('input', () => {
                if(checkFormInputs) {
                    actions.enable();
                } else {
                    actions.disable();
                }
            })
          },

          // onClick is called when the button is clicked
          onClick: function () {
            const formFields = document.querySelectorAll(".form-field");
            let allFilled = true;

            for (let field of formFields) {
              if (field.value == "") {
                allFilled = false;
              }
            }

            if (!allFilled) {
              alert("You have to fill all the form fields!");
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
