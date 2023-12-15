import Toolbar from "./toolbar/Toolbar";

export default function () {
    document.body.appendChild(Toolbar());
    console.log("Hey from app.js");
}