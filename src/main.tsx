import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BlogDetails from "./pages/BlogDetails.tsx";


gsap.registerPlugin(useGSAP, ScrollTrigger);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/blog/:slug" element={<BlogDetails />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
