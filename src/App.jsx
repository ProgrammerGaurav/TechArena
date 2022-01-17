import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Explore from "./components/Explore";
import Events from "./components/Events";
import About from "./components/About";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";

import "./assets/scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	useEffect(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener("click", function (e) {
				e.preventDefault();
				document.querySelector(this.getAttribute("href")).scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			});
		});
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Navbar />
								<Landing />
								<Explore />
								<Events />
								<About />
								<Footer />
							</>
						}
					/>
					<Route path="/register" element={<RegisterForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
