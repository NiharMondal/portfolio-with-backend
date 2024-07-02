import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import resume from '../assets/resume_of_nihar.pdf'
const pTag =
	"Hello! I'm a passionate MERN stack developer with a knack for building dynamic and responsive web applications. I thrive on turning complex problems into elegant solutions.";
export default function About() {
	const about = useRef(null);
	const bRef = useRef(null);
	//  
	const tl = gsap.timeline();
	useGSAP(() => {
		tl.from(".about_text", {
			stagger: .6,
			
			opacity: 0,
			y:300,
			scrollTrigger: {
				trigger: ".about_text",
				// start: "top 80%",
				end: "bottom center",
				scrub: true,
			},
		});

		tl.from(bRef.current, {
			opacity: 0,
			y:20,
			delay:0.5,
			scrollTrigger: {
				trigger: bRef.current,
				start: "top 78%",
				end: "bottom 70%",
				scrub: true,
			},
		});
	});
	return (
		<section className="max-w-4xl mx-auto mt-20 lg:mt-44 relative" id="about">
			<p
				className="text-center text-2xl md:text-4xl font-normal mb-10"
				ref={about}
			>
				{pTag.split("").map((chr, index) => (
					<span key={index} className="about_text">
						{chr}
					</span>
				))}
			</p>
			<a download href={resume}>
				<button
					className="flex w-fit bg-primary py-3 px-5 mx-auto rounded-sm overflow-hidden sudo group"
					ref={bRef}
				>
					<span className=" font-semibold tracking-wider group-hover:scale-95 duration-200">
						Download Resume
					</span>
				</button>
			</a>
		</section>
	);
}
