import React from "react";
import Header from "../../components/Header";
import MyTabs from "../../components/Tabs";
import { useSelector } from "react-redux";

const Admin = () => {
	const { portfolioData } = useSelector(state => state.root);
	return (
		<div>
			<Header />
			{portfolioData && (
				<div className="m-5 ">
					<MyTabs portfolioData={portfolioData} />
				</div>
			)}
		</div>
	);
};

export default Admin;
