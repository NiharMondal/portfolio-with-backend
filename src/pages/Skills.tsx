import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
export default function Skills() {
	const texts = useRef(null);
	const skills = useRef(null);
	const tl = gsap.timeline({})
	useGSAP(() => {
		tl.from(texts.current, {
			y: 80,
			
			scrollTrigger: {
				trigger: texts.current,
				scrub: true,
				end: "bottom center",
			},
		});
		tl.from(skills.current, {
			x: 80,
		
			scrollTrigger: {
				trigger: skills.current,
				scrub: true,
				end: "bottom center",
			},
		});
	});
	return (
		<section className="max-w-5xl mx-auto  py-20">
			<h5 className="text-center">Skill and Expertice</h5>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-20">
				<div className="text-xl space-y-4" ref={texts}>
					<p>
						I build new projects just to tickle my brain. All of my
						project's source code will be found on{" "}
						<a
							href="https://github.com/NiharMondal"
							target="_blank"
							className="text-secondary sudo_link"
						>
							GitHub.
						</a>
					</p>
					<p>
						I specialize in creating beautiful, responsive,
						professional websites using ReactJs and NextJs.
					</p>
				</div>
				<div className="ring-1 ring-primary rounded p-5" ref={skills}>
					<h6 className=" text-2xl text-primary mb-2">Expertice</h6>
					<div className="grid grid-cols-2">
						<ul>
							<li>JavaScript</li>
							<li>React</li>
							<li>NextJs</li>
							<li>Typescript</li>
							<li>Redux Toolkit</li>
							<li>TailwindCSS</li>
						</ul>
						<ul className="text-end">
							<li>NodeJs</li>
							<li>ExpressJs</li>
							<li>Mongoose</li>
							<li>Prisma</li>
							<li>MongoDB Atlas</li>
							<li>PostgreSQL</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
