import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import AdminIntro from "../pages/admin/AdminIntro";
import AdminAbout from "../pages/admin/AdminAbout";
import AdminExperiences from "../pages/admin/AdminExperiences";

const items = [
	{
		key: "1",
		label: "Intro",
		children: <AdminIntro />,
	},
	{
		key: "2",
		label: "About",
		children: <AdminAbout />,
	},
	{
		key: "3",
		label: "Experiences",
		children: <AdminExperiences />,
	},
];

const MyTabs = () => (
	<Tabs defaultActiveKey="1">
		{items.map(item => (
			<div tab={item.label} key={item.key}>
				{item.children}
			</div>
		))}
	</Tabs>
);

export default MyTabs;
