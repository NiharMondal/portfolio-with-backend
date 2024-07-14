import "./App.css";
import {
	About,
	Banner,
	Contact,
	Experiences,
	Footer,
	Skills,
	Work,
	Blog,
} from "./components/home";

function App() {
	return (
		<main className="bg-slate-800 text-gray-50 px-3 lg:px-0 overflow-hidden">
			<Banner />
			<About />
			<Experiences />
			<Work />
			<Skills />
			<Blog />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
