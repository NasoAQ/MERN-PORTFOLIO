import React, { useState } from "react";
import Section from "../../components/Section";
import { experiences } from "../../resources/experiences";

const Experiences = () => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	return (
		<div>
			<Section title="Experiences" />
			<div className="flex py-10 gap-20 sm:flex-col">
				<div className="flex flex-col gap-10 border-l-2 border-[#b93e3e81] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
					{experiences.map((experience, i) => (
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
								{experience.period}
							</h1>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="text-secondary text-2xl">
						{experiences[selectedItemIndex].title}
					</h1>
					<h1 className="text-tertiary text-2xl">
						{experiences[selectedItemIndex].company}
					</h1>
					<p className="text-tertiary">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
						sed aliquam ipsum excepturi, ipsam ea soluta alias dignissimos vel
						et!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experiences;
