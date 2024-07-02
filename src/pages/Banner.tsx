import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Heading from "../components/Heading";
import { useRef } from "react";

export default function Banner() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.from(".clip", {
				x: -120,

				stagger: 0.5,
				scrollTrigger: {
					trigger: ".clip",
					scrub: true,
				},
			});
		},
		{ scope: container }
	);
	return (
		<section className="h-auto lg:max-h-screen">
			<Heading />
			<div className="pt-28 md:px-20" ref={container}>
				<h5> Hi, I am a </h5>

				<h1 className="text-primary  banner_heading">FULL-STACK</h1>
				<h1 className="flex justify-end items-end clip"><span className="text-[4vh] mr-2">WEB</span>DEVELOPER</h1>
			</div>
		</section>
	);
}
