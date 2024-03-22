import React from "react";

const Loader = () => {
	return (
		<div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]">
			<div className="flex gap-5 text-4xl font-semibold sm:text-3xl">
				<h1 className="text-secondary n">N</h1>
				<h1 className="text-fourty s">S</h1>
				<h1 className="text-tertiary o">O'</h1>
			</div>
		</div>
	);
};

export default Loader;
