import React, { useState } from "react";
import Section from "../../components/Section";
import { projects } from "../../resources/projects";

const Projects = () => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	return (
		<div>
			<Section title="Projects" />
			<div className="flex py-10 gap-20 sm:flex-col">
				<div className="flex flex-col gap-10 border-l-2 border-[#b93e3e81] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
					{projects.map((project, i) => (
						<div
							onClick={() => {
								setSelectedItemIndex(i);
							}}
							className="cursor-pointer"
						>
							<h1
								className={`text-xl px-5 ${
									selectedItemIndex === i
										? "text-secondary border-secondary border-l-4 -ml-[3px] bg-[#b93e3e44] py-3"
										: "text-tertiary py-3"
								}`}
							>
								{project.title}
							</h1>
						</div>
					))}
				</div>
				<div className="flex items-center justify-center gap-10 sm:flex-col">
					<img
						src={projects[selectedItemIndex].image}
						alt=""
						className="h-80 w-auto"
					/>
					<div className="flex flex-col gap-5">
						<h1 className="text-secondary text-2xl">
							{projects[selectedItemIndex].title}
						</h1>

						<p className="text-tertiary">
							{projects[selectedItemIndex].description}
						</p>

						<p className="text-tertiary">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
							sed aliquam ipsum excepturi, ipsam ea soluta alias dignissimos vel
							et!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
