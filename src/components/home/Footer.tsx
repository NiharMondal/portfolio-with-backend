export default function Footer() {
	return (
		<footer className="border-t border-dark-gray py-20">
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
				<div className="space-y-3 text-center md:text-left">
					<p className="text-2xl">Contact with me</p>
					<div className="flex flex-col">
						<a href="mailto:developernihar@gmail.com">
							developernihar@gmail.com
						</a>
						<p>+8801303171346</p>
					</div>
				</div>

				<div className="md:flex flex-col md:flex-row items-center gap-x-5 text-center">
					<p>
						<a href="/">Home</a>
					</p>
					<p>
						<a href="/#work">Work</a>
					</p>
					<p>
						<a href="/#about">About</a>
					</p>
					<p>
						<a href="/#contact">Contact</a>
					</p>
				</div>
        <div className="self-center">
          <p>All rights reserved to &copy;Nihar Mondal</p>
        </div>
			</section>
		</footer>
	);
}
