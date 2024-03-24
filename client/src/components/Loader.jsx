import React from "react";

const Loader = () => {
	return (
		<div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]">
			<div className="flex gap-2 text-4xl font-semibold sm:text-3xl items-end">
				{/* <h1 className="text-secondary n">N</h1>
				<h1 className="text-fourty s">S</h1>
				<h1 className="text-tertiary o">O'</h1> */}
				{/* <img src="N1.png" alt="" className="n" style={{ height: "30px" }} />
				<img src="aso.png" alt="" className="s" style={{ height: "15px" }} />
				<img src="AQ.png" alt="" className="o" style={{ height: "30px" }} /> */}
				<img src="NewLogo.png" alt="logo" width={140} className="o" />
			</div>
		</div>
	);
};

export default Loader;
