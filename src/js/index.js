//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-regular-svg-icons";

library.add(faClock);

//import your own components
import Home from "./component/home.jsx";

//render your react application
let i = 0;
function intervalRender() {

    i++;
    let numArr = String(i).padStart(6, "0").split('');
    ReactDOM.render(<Home numArr={numArr}/>, document.querySelector("#app"));
    if (i === 999999) clearInterval(intervalID);
}

const intervalID = setInterval(intervalRender, 1000);