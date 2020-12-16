import React from "react";
import ReactDom from "react-dom";
import "./app.css"
import TodoApp from "./components/TodoApp"
import {createStore} from "redux";
import { Provider } from "react-redux";
import rootReducer from './store/reducers';
const store = createStore(rootReducer);
ReactDom.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,document.getElementById("root")
)
