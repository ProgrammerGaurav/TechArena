import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Explore from "./components/Explore";
import Events from "./components/Events";
import About from "./components/About";
import Faculty from "./components/Faculty";
import Principal from "./components/Principal";
import Taboiz from "./components/Taboiz";
import Footer from "./components/Footer";
import RegisterationClosed from "./components/RegisterationClosed";
// import RegisterForm from "./components/RegisterForm";

import "./assets/scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	useEffect(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener("click", function (e) {
				e.preventDefault();
				let checkExist = setInterval(() => {
					let element = document.querySelector(this.getAttribute("href"));
					if (element) {
						element.scrollIntoView({
							behavior: "smooth",
							block: "start",
						});
						clearInterval(checkExist);
					}
				}, 100);
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
								<Footer />
							</>
						}
					/>
					<Route
						path="/about"
						element={
							<>
								<Navbar />
								<Taboiz />
								<Principal />
								<Faculty />
								<About />
								<Footer />
							</>
						}
					/>
					<Route
						path="/register"
						element={
							<>
								<Navbar />
								<RegisterationClosed />
								{/* <RegisterForm /> */}
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
