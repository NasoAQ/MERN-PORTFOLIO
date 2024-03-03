import React from "react";

function Intro() {
	return (
		<div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
			<h1 className="text-tertiary">Hi, I am</h1>
			<h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
				Gabriele D'Onofrio
			</h1>
			<h1 className="text-7xl sm:text-3xl text-tertiary font-semibold">
				I build things for the web
			</h1>
			<p className="text-tertiary">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				minima culpa dolore ullam! Culpa tempora cum laborum at. Inventore,
				culpa!
			</p>
			<button className="border-2 border-secondary text-secondary px-10 py-3 rounded">
				Get Started
			</button>
		</div>
	);
}

export default Intro;
