const express = require("express");
const router = express.Router();
const {
	Intro,
	About,
	Project,
	Contact,
	Experience,
	Course,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
	try {
		const intros = await Intro.find();
		const abouts = await About.find();
		const projects = await Project.find();
		const contacts = await Contact.find();
		const experiences = await Experience.find();
		const courses = await Course.find();

		res.status(200).send({
			intro: intros[0],
			about: abouts,
			projects: projects,
			contact: contacts,
			experiences: experiences,
			courses: courses,
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
