import { useEffect } from "react";
import "../node_modules/particles.js/particles";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import "./assets/scss/main.scss";

function App() {
	const particlesJS = window.particlesJS;

	useEffect(() => {
		particlesJS.load("particles-js", "../assets/particles.json", function () {
			console.log("callback - particles.js config loaded");
		});
	}, [particlesJS]);
	return (
		<div className="App">
			<Navbar />
			<Landing />
		</div>
	);
}

export default App;
