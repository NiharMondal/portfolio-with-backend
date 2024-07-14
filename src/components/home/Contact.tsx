import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
	const [formValue, setFormValue] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});
	const form = useRef(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm("service_9e2mppf", "template_5ns8lk2", form.current!, {
				publicKey: "hBuOWLmbnTLTm5HBp",
			})
			.then(
				() => {
					setFormValue({
						user_email: "",
						user_name: "",
						message: "",
					});
					window.alert("Your message has been sent successfully😊");
				},
				(error: any) => {
					window.alert(error.text);
				}
			);
	};

	const handleChage = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value, name } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};
	return (
		<section className="py-20" id="contact">
			<div>
				<h1 className="text-nowrap tracking-wide text-center">
					Say Hello! Say Hello!
				</h1>
			</div>

			<form
				ref={form}
				onSubmit={sendEmail}
				className="max-w-2xl mx-auto border border-primary/40 p-10 rounded mt-10 space-y-6"
			>
				<input
					type="text"
					className="outline-none border-b border-secondary/40 focus:border-secondary w-full pt-2 bg-transparent"
					placeholder="Full Name"
					required
					name="user_name"
					value={formValue.user_email}
					onChange={handleChage}
				/>
				<input
					type="email"
					className="outline-none border-b border-secondary/40 focus:border-secondary w-full pt-2 bg-transparent"
					placeholder="Email "
					required
					name="user_email"
					value={formValue.user_email}
					onChange={handleChage}
				/>
				<textarea
					rows={4}
					className="outline-none border-b border-secondary/40 focus:border-secondary w-full bg-transparent"
					placeholder="Write message"
					required
					name="message"
					value={formValue.message}
					onChange={handleChage}
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
