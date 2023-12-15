import initializeQuantityListeners from "./domManipulation/initializeQuantityListeners";
import CheckoutContainer from "./checkoutContainer/CheckoutContainer";
import Toolbar from "./toolbar/Toolbar";
import createPaypalButton from "./domManipulation/createPaypalButton";

export default function () {
  document.body.appendChild(Toolbar());
  document.body.appendChild(CheckoutContainer());

  initializeQuantityListeners();
  createPaypalButton();
}
