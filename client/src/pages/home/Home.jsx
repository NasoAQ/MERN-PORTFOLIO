import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import { useSelector } from "react-redux";

const Home = () => {
	const { portfolioData } = useSelector(state => state.root);
	return (
		<div>
			<Header />
			{portfolioData && (
				<div className="bg-primary px-40 sm:px-5">
					<Intro />
					<About id="about-section" />
					<Projects />
					<Courses />
					<Experiences />
					<Contact />
					<Footer />
					<LeftSidebar />
				</div>
			)}
		</div>
	);
};

export default Home;
