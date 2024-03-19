import React from "react";
import { Tabs } from "antd";
import AdminIntro from "../pages/admin/AdminIntro";
import AdminAbout from "../pages/admin/AdminAbout";
import AdminExperiences from "../pages/admin/AdminExperiences";
import AdminProjects from "../pages/admin/AdminProjects";
import AdminCourses from "../pages/admin/AdminCourses";
import AdminContact from "../pages/admin/AdminContact";

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
		label: "Projects",
		children: <AdminProjects />,
	},
	{
		key: "4",
		label: "Courses",
		children: <AdminCourses />,
	},
	{
		key: "5",
		label: "Experiences",
		children: <AdminExperiences />,
	},
	{
		key: "6",
		label: "Contacts",
		children: <AdminContact />,
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
