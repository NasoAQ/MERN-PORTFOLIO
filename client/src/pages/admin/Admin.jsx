import React, { useEffect } from "react";
import Header from "../../components/Header";
import MyTabs from "../../components/Tabs";
import { useSelector } from "react-redux";

const Admin = () => {
	const { portfolioData } = useSelector(state => state.root);

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			window.location.href = "/admin-login";
		}
	}, []);

	return (
		<div>
			<Header />
			<div className="flex gap-10 items-center px-5 justify-between">
				<div className="flex gap-10 items-center">
					<h1 className="text-3xl text-tertiary mt-5">Admin Portfolio</h1>
					<div className="w-60 h-[1px] bg-tertiary"></div>
				</div>
				<h1
					className="underline text tertiary text-xl cursor-pointer"
					onClick={() => {
						localStorage.removeItem("token");
						window.location.href = "/admin-login";
					}}
				>
					Logout
				</h1>
			</div>
			{portfolioData && (
				<div className="m-5 pb-5">
					<MyTabs portfolioData={portfolioData} />
				</div>
			)}
		</div>
	);
};

export default Admin;
