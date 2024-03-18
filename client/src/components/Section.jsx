import React from "react";

function Section({ title }) {
	return (
		<div className="flex gap-10 items-center py-20 mt-20">
			<h1 className="text-3xl text-secondary">{title}</h1>
			<div className="w-60 h-[1px] bg-tertiary"></div>
		</div>
	);
}

export default Section;
