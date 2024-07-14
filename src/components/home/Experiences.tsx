import { useEffect, useRef, useState } from "react";
import { url } from "../../lib/url";
import { TExperienceResponse, TResponseFromServer } from "../../types";
import { formatDate } from "../../lib/formatDate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Experiences() {
	const container = useRef(null);
	const [experience, setExperience] =
		useState<TResponseFromServer<TExperienceResponse[]>>();

	useEffect(() => {
		fetch(`${url}/experience`)
			.then((res) => res.json())
			.then((data) => setExperience(data))
			.catch((e) => console.log(e));
	}, []);

	useGSAP(() => {
		gsap.fromTo(
			container.current,
			{
				rotate: -10,
			},
			{
				rotate: 0,

				scrollTrigger: {
					trigger: container.current,
					scrub: true,

					start: "top 85%",
					end: "bottom 75%",
				},
			}
		);
	});
	return (
		<section className="max-w-5xl mx-auto mt-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-0 ">
			<h5 className="self-center">Experices</h5>
			<div className="grid grid-cols-1 gap-5" ref={container}>
				{experience?.data.map((exper) => {
					const startDate = formatDate(exper.start_date);
					const endDate = formatDate(exper.end_date);
					return (
						<div
							className="bg-primary/10 p-10 rounded"
							key={exper.id}
						>
							<h3 className="text-2xl mb-2">{exper.position}</h3>
							<span className="text-secondary  sudo_link">
								{exper.company}
							</span>
							<p>
								{startDate} - {endDate}
							</p>
							<p className="text-gray-100 mt-2">
								{exper.responsibilities}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
