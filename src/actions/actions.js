// src/actions/actions.js
import { INCREMENT, DECREMENT } from "./actionTypes.JS";

const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });

export { incrementAction, decrementAction };
