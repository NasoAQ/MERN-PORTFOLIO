import React from "react";
import Section from "../../components/Section";
import { useSelector } from "react-redux";

const Contact = () => {
	const { portfolioData } = useSelector(state => state.root);
	const contactData = portfolioData && portfolioData.contact[0];
	return (
		<div>
			<Section title="Say Hello" />
			<div className="flex sm:flex-col items-center justify-between">
				<div className="flex flex-col ">
					<h1 className="text-secondary text-sm">{"{"}</h1>
					{Object.keys(contactData).map(
						key =>
							key !== "_id" && (
								<div className="ml-5 text-sm" key={key}>
									<span className="text-secondary">"{key}" : </span>
									<span className="text-secondary ml-2">
										"{contactData[key]}"{" "}
									</span>
								</div>
							)
					)}
					<h1 className="text-secondary text-sm">{"}"}</h1>
				</div>
				<div className="h-[400px]">
					<dotlottie-player
						src="https://lottie.host/aa1c0060-aa9d-4a20-8fc7-e4e8c1d2d0dd/TeXSLrrudz.json"
						background="transparent"
						speed="1"
						loop
						autoplay
					></dotlottie-player>
				</div>
			</div>
		</div>
	);
};

export default Contact;
