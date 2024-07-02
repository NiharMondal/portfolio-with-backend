import { useState } from "react";
import { projectData } from "../components/data";

type TProject = {
	title: string;
	description: string;
	client: string;
	backend: string;
	liveLink: string;
	photo: string;
};

const projectTitles = projectData.map((work) => work.title);

export default function Work() {
	const [project, setProjects] = useState<TProject>(projectData[0]);

	const handleMatch = (title: string) => {
		const res = projectData.find((work) => work.title === title);
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
				<div className="w-full relative overflow-hidden rounded-md border-2 border-primary">
					<img
						src={project.photo}
						alt={project.description}
						className="h-[400px] w-full object-cover object-center opacity-20 "
					/>
					<div className="absolute inset-5">
						<div className="h-full flex flex-col justify-between ">
							<div>
								<p className="flex justify-between items-center text-2xl">
									{project.title}{" "}
									<a
										className="sudo_link text-lg "
										href={project.liveLink}
									>
										Live Link
									</a>
								</p>
								<p className="mt-4">{project.description}</p>
							</div>
							<div className="flex justify-between items-center">
								<a
									href={project.client}
									target="_blank"
									rel="noopener noreferrer"
									className="sudo_link"
								>
									Front End
								</a>

								{project.backend ? (
									<a
										href={project.backend}
										target="_blank"
										rel="noopener noreferrer"
										className="sudo_link"
									>
										Back End
									</a>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
