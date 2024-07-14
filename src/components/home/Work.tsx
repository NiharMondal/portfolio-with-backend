import { useEffect, useRef, useState } from "react";
import { url } from "../../lib/url";
import { TProjectResponse, TResponseFromServer } from "../../types";
import { defaultProject } from "../../lib/defaultProject";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Work() {
	const photo_wrapper = useRef(null);
	const [project, setProjects] =
		useState<TResponseFromServer<TProjectResponse[]>>();

	const [work, setWork] = useState<TProjectResponse>(
		defaultProject as TProjectResponse
	);

	useEffect(() => {
		fetch(`${url}/project`)
			.then((res) => res.json())
			.then((data) => setProjects(data))
			.catch((e) => console.log(e));
	}, []);

	const projectTitles = project?.data?.map((work) => work?.title);

	const handleMatch = (title: string) => {
		const res = project?.data?.find((work) => work?.title === title);
		setWork(res as TProjectResponse);
	};

	useGSAP(() => {
		gsap.fromTo(
			photo_wrapper.current,
			{
				rotate: -15,
			},
			{
				rotate: 0,

				scrollTrigger: {
					trigger: photo_wrapper.current,
					scrub: true,

					start: "top 85%",
					end: "bottom 75%",
				},
			}
		);
	});
	return (
		<section id="work" className="mx-auto max-w-6xl py-16">
			<h5 className="text-center">Selected Works</h5>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-20">
				<div className="place-self-center heading_container">
					{projectTitles?.map((title, index) => (
						<h3
							key={index}
							onClick={() => handleMatch(title)}
							className={`heading ${
								work.title === title ? "opacity-100" : ""
							}`}
						>
							{title}
						</h3>
					))}
				</div>
				<div ref={photo_wrapper}>
					<div className="w-full  rounded-md border-2 border-primary img_container  group">
						<img
							src={work?.photo}
							alt={work?.title}
							className="w-full h-full object-cover object-top group-hover:object-bottom  project_photo"
						/>

						<div className="absolute inset-0 group-hover:bg-black/80"></div>

						<div
							className="opacity-0 group-hover:opacity-100 absolute inset-5 duration-300"
							dangerouslySetInnerHTML={{
								__html: work?.description,
							}}
						></div>
						<div className="hidden group-hover:block absolute right-3 top-5">
							<div className="space-x-3 *:p-2 *:overflow-hidden">
								<a
									className="sudo rounded-md "
									target="_blank"
									href={`${work.live_link}`}
								>
									Live Link
								</a>
								<a
									className="sudo"
									target="_blank"
									href={`${work.front_end}`}
								>
									Client
								</a>
								<span className="sudo">
									{defaultProject.back_end &&
										work.back_end && (
											<a
												target="_blank"
												href={`${work.back_end ?? ""}`}
											>
												Server
											</a>
										)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
