import { createStore } from "redux";
import rootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(rootReducer,composeWithDevTools( ));

export default store;
