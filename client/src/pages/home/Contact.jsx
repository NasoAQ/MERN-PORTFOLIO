import React from "react";
import Section from "../../components/Section";

const Contact = () => {
	const user = {
		name: "D'Onofrio Gabriele",
		age: null,
		gender: "male",
		email: "gsbrieledo@gmail.com",
		mobile: "+39 3771086816",
		country: "Italy",
	};
	return (
		<div>
			<Section title="Say Hello" />
			<div className="flex sm:flex-col items-center justify-between">
				<div className="flex flex-col gap-1">
					<h1 className="text-secondary text-sm">{"{"}</h1>
					{Object.keys(user).map(key => (
						<h1 className="ml-5 text-sm">
							<span className="text-secondary">{key} : </span>
							<span className="text-secondary ml-2">"{user[key]}" </span>
						</h1>
					))}
					<h1 className="text-secondary text-sm">{"{"}</h1>
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
