import React from "react";
import Section from "../../components/Section";
import { useSelector } from "react-redux";

function About() {
	const { portfolioData } = useSelector(state => state.root);
	const aboutData =
		portfolioData && portfolioData.about && portfolioData.about[0];
	const { skills, lottieURL, description1, description2 } = aboutData || {};

	return (
		<div id="about-section">
			<Section title="Su di me" />
			<div className="flex items-center w-full sm:flex-col">
				<div className="h-[70vh] w-1/2 sm:w-full">
					<dotlottie-player
						src={lottieURL}
						background="transparent"
						speed="1"
						loop
						autoplay
					></dotlottie-player>
				</div>
				<div className="flex flex-col gap-5 w-1/2 sm:w-full">
					<p className="text-tertiary">{description1 || ""} </p>
					<p className="text-tertiary">{description2}</p>
				</div>
			</div>

			<div className="py-1">
				<h1 className="text-secondary text-2xl">
					Queste sono le tecnologie con cui lavoro attualmente
				</h1>
				<div className="flex flex-wrap gap-10 mt-5">
					{skills.map((skill, i) => (
						<div className="border rounded-md border-fourty py-3 px-10" key={i}>
							<h1 className="text-tertiary">{skill}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default About;
