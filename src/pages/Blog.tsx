import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Blog() {
	const bContainer = useRef(null);

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".blog_card",
			toggleActions: "restart  none none",
			start: "top 80%",
		},
	});
	useGSAP(
		() => {
			tl.from(".blog_card", {
				opacity: 0,
				stagger: 0.3,
				ease: "power1.in",
			});
		},
		{ scope: bContainer }
	);
	return (
		<section className="max-w-6xl mx-auto">
			<h3 className="text-center">Blogs</h3>
			<div
				className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
				ref={bContainer}
			>
				{[...Array(3)].map((_, index) => (
					<div key={index} className="blog_card">
						<h4>Hello world</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Consequuntur, odio. Fugiat quibusdam ab libero
							odit, quae aspernatur dolor voluptate provident.
							Voluptatem cupiditate quas quam delectus error quae,
							impedit ratione a.
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
