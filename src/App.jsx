import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import "./assets/scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
