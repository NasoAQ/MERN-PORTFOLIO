import React from "react";
import Header from "../../components/Header";
import MyTabs from "../../components/Tabs";
import { useSelector } from "react-redux";

const Admin = () => {
	const { portfolioData } = useSelector(state => state.root);
	return (
		<div>
			<Header />
			<div className="flex gap-10 items-center px-5">
				<h1 className="text-3xl text-tertiary">Admin Portfolio</h1>
				<div className="w-60 h-[1px] bg-tertiary"></div>
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
