import React from "react";
import ReactDom from "react-dom";

import "./styles.scss";

ReactDom.render(
	React.createElement("h1", {}, "GitHub Cards App"),
	document.querySelector("#root")
);
