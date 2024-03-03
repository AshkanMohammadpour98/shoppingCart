import { legacy_createStore } from "redux";

import reducer from "./readucer";
const store = legacy_createStore(reducer);

export default store;