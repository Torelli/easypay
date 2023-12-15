import initializeQuantityListeners from "./initializeQuantityListeners"
import initializeResultListeners from "./initializeResultListeners";

export default function initializeAllListeners() {
    initializeQuantityListeners();
    initializeResultListeners();
}