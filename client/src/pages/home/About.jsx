import React from "react";
import Section from "../../components/Section";

function About() {
	const skills = [
		"HTML",
		"CSS",
		"Javascript",
		"MongoDB",
		"Express",
		"React",
		"Node",
	];
	return (
		<div>
			<Section title="About" />
			<div className="flex items-center w-full sm:flex-col">
				<div className="h-[70vh] w-1/2 sm:w-full">
					<dotlottie-player
						src="https://lottie.host/16a42804-612d-4a74-801a-7bfe7014db15/5NyuwsgkyF.json"
						background="transparent"
						speed="1"
						loop
						autoplay
					></dotlottie-player>
				</div>
				<div className="flex flex-col gap-5 w-1/2 sm:w-full">
					<p className="text-tertiary">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
						dolorum eius, voluptatem aut possimus omnis perferendis corrupti
						mollitia architecto placeat.
					</p>
					<p className="text-tertiary">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
						delectus vero similique rem animi adipisci.
					</p>
				</div>
			</div>

			<div className="py-5">
				<h1 className="text-secondary text-2xl">
					Hera are a few technology I've been working with recently
				</h1>
				<div className="flex flex-wrap gap-10 mt-5">
					{skills.map((skill, i) => (
						<div className="border border-secondary py-3 px-10">
							<h1 className="text-secondary" key={i}>
								{skill}
							</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default About;
