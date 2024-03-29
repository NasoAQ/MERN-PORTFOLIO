import React from "react";
import { useSelector } from "react-redux";

function Intro() {
	const { portfolioData } = useSelector(state => state.root);
	const { intro } = portfolioData;
	const { firstName, lastName, welcomeText, description, caption } = intro;

	const handleButtonClick = () => {
		const aboutSection = document.getElementById("about-section");
		aboutSection.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
			<h1 className="text-tertiary">{welcomeText || ""}</h1>
			<h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
				{firstName || ""} {""}
				{lastName || ""}
			</h1>
			<h1 className="text-7xl sm:text-3xl text-tertiary font-semibold">
				{caption || ""}
			</h1>
			<p className="text-tertiary">{description || ""}</p>
			<button
				className="border-2 border-secondary text-secondary px-10 py-3 rounded hover:bg-red-200 hover:border-red-200 hover:text-tertiary"
				onClick={handleButtonClick}
			>
				Andiamo!
			</button>
		</div>
	);
}

export default Intro;
