// src/store.js
import { createStore } from "./customRedux.JS";
import counterReducer from "./reducers/reducers.JS";

const store = createStore(counterReducer);

export default store;
