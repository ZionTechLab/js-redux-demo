// src/app.js
import store from "./store.JS";
import { incrementAction, decrementAction } from "./actions/actions.JS";

// Function to update the displayed counter value
const updateCounterValue = () => {
  const counterValueElement = document.getElementById("counterValue");
  counterValueElement.textContent = `Current Value: ${store.getState()}`;
};

// Subscribe to state changes
store.subscribe(updateCounterValue);

// Dispatch actions on button clicks
document.getElementById("incrementButton").addEventListener("click", () => {
  store.dispatch(incrementAction());
});

document.getElementById("decrementButton").addEventListener("click", () => {
  store.dispatch(decrementAction());
});

// Initial update
updateCounterValue();
