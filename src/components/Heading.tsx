import logo from "../assets/logo.png";
export default function Heading() {
	return (
		<header className="p-8">
			<nav className="flex justify-between items-center">
				<div>
					<a href="/" className="flex items-center gap-2">
						<img src={logo} alt="logo" className="size-10" />
						<h3 className="tracking-widest">ihar</h3>
					</a>
				</div>
				<ul className="flex gap-x-10 *:cursor-pointer">
					<li>
						<a href="#work">Work</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
