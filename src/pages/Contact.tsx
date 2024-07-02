export default function Contact() {
	return (
		<section className="py-20" id="contact">
			<div>
				<h1 className="text-nowrap tracking-wider">
					Say Hello! Say Hello!
				</h1>
			</div>

			<form
				action=""
				className="max-w-2xl mx-auto border border-primary/40 p-10 rounded mt-10 space-y-6"
			>
				<input
					type="text"
					className="outline-none border-b border-secondary/40 focus:border-secondary w-full pt-2 bg-transparent"
					placeholder="Full Name"
					required
				/>
				<input
					type="email"
					className="outline-none border-b border-secondary/40 focus:border-secondary w-full pt-2 bg-transparent"
					placeholder="Email "
					required
				/>
				<textarea
					rows={4}
					className="outline-none border-b border-secondary/40 focus:border-secondary w-full bg-transparent"
					placeholder="Write message"
					required
				/>

				<button
					className="flex w-fit bg-primary py-3 px-5 mx-auto rounded-sm overflow-hidden sudo group"
					type="submit"
				>
					<span className=" font-semibold tracking-wider group-hover:scale-95 duration-200">
						Let's Talk
					</span>
				</button>
			</form>
		</section>
	);
}
