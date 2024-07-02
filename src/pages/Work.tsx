import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
type TProject = {
	title: string;
	description: string;
	client: string;
	backend: string;
	liveLink: string;
	photo: string;
};
const works = [
	{
		title: "Classy Garments",
		description: "hello sfsdhsd hjdsfsa hsdfiekn seisds iehdssvb",
		client: "ewihewffshd",
		backend: "ewihewffshd",
		liveLink: "3532",
		photo: "https://images.unsplash.com/photo-1718810125230-e8e2271354f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
	},
	{
		title: "Dashboard",
		description: "hello sfsdhsd dfasfsd ewrwrgt fdxzvss",
		client: "sdfsda",
		backend: "uykhmmdhs",
		liveLink: "ewrqrwerqw",
		photo: "https://plus.unsplash.com/premium_photo-1676490733323-cb6b91f3c8de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
	},
];
const projectTitles = works.map((work) => work.title);

export default function Work() {
	const [project, setProjects] = useState<TProject>(works[0]);

	const handleMatch = (title: string) => {
		const res = works.find((work) => work.title === title);
		setProjects({ ...(res as TProject) });
	};

	return (
		<section id="work" className="mx-auto max-w-6xl py-16">
			<h5 className="text-center">Selected Works</h5>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-20">
				<div className="place-self-center heading_container">
					{projectTitles.map((title, index) => (
						<h3
							key={index}
							onClick={() => handleMatch(title)}
							className={`heading ${
								project.title === title ? "opacity-100" : ""
							}`}
						>
							{title}
						</h3>
					))}
				</div>
				<div className="w-full relative overflow-hidden rounded-md ">
					<img
						src={project.photo}
						alt={project.description}
						className="h-[400px] w-full object-cover object-center opacity-40"
					/>
					<div className="absolute inset-5">
						<div className="h-full flex flex-col justify-between ">
							<div>
								
								<p className="flex justify-between items-center text-2xl">
									{project.title}{" "}
									<a className="sudo_link text-lg " href={project.liveLink}>Live Link</a>
								</p>
								<p className="mt-4">{project.description}</p>
							</div>
							<div className="flex justify-between items-center">
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
