import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

//component file
import TodoContainer from "./components/TodoContainer";

//styles sheets
import "./App.css";

// React.StrictMode, para obteener notificaciones más detalladas de posibles problemas
ReactDOM.render(
  <React.StrictMode> 
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
