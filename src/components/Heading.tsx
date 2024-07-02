export default function Heading() {
	return (
		<header className="p-8">
			<nav className="flex justify-between items-center">
				<div>
					<a href="/">
						<span className="px-5 py-2 border border-primary rounded-full cursor-pointer  inline-block scale-110 hover:scale-100 duration-300 font-semibold">
							Nihar Mondal
						</span>
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
