import React from "react";

function Header() {
	return (
		<div className="p-5 bg-primary flex justify-center">
			{/* <h1 className="text-secondary text-4xl font-semibold">N</h1>
			<h1 className="text-fourty text-4xl font-semibold">S</h1>
			<h1 className="text-tertiary text-4xl font-semibold">O'</h1> */}
			<img width={140} src="NewLogo.png" alt="logo" />
		</div>
	);
}

export default Header;
