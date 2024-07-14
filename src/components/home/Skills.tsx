import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { url } from "../../lib/url";
import { TResponseFromServer, TSkillsResponse } from "../../types";

export default function Skills() {
	const [skillSet, setSkillSet] =
		useState<TResponseFromServer<TSkillsResponse[]>>();

	const texts = useRef(null);
	const skills = useRef(null);
	const tl = gsap.timeline({});
	useGSAP(() => {
		tl.from(texts.current, {
			x: -80,

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

	useEffect(() => {
		fetch(`${url}/skill`)
			.then((res) => res.json())
			.then((data) => setSkillSet(data))
			.catch((e) => console.log(e));
	}, []);
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
					<div className="grid grid-cols-2 space-y-1">
						{skillSet?.data.map((skill) => (
							<ul key={skill.id} className="even:text-right">
								<li>{skill.name}</li>
							</ul>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
