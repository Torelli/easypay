import CheckoutContainer from "./checkoutContainer/CheckoutContainer";
import Toolbar from "./toolbar/Toolbar";
import createPaypalButton from "./domManipulation/createPaypalButton";
import ResultMessage from "./resultMessage/ResultMessage";
import initializeAllListeners from "./domManipulation/initializeAllListeners";

export default function () {
  document.body.appendChild(ResultMessage());
  document.body.appendChild(Toolbar());
  document.body.appendChild(CheckoutContainer());

  initializeAllListeners();
  createPaypalButton();
}
