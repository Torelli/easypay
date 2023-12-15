import CheckoutContainer from "./checkoutContainer/CheckoutContainer";
import Toolbar from "./toolbar/Toolbar";

export default function () {
    document.body.appendChild(Toolbar());
    document.body.appendChild(CheckoutContainer());
}