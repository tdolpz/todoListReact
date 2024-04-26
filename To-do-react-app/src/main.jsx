import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* Hier wird das data-Array über die Property "tasks" an die App-Komponente übergeben */}
		<App />
	</React.StrictMode>
);
