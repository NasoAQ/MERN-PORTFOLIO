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

//Get all data

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

//Update Intro

router.post("/update-intro", async (req, res) => {
	try {
		const intro = await Intro.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: intro,
			success: true,
			message: "Intro update successfully",
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

//Update About

router.post("/update-about", async (req, res) => {
	try {
		const about = await About.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: about,
			success: true,
			message: "About update successfully",
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

//Add Experiences

router.post("/add-experience", async (req, res) => {
	try {
		const experience = new Experience(req.body);
		await experience.save();
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience add successfully",
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

// Update experiences

router.post("/update-experience", async (req, res) => {
	try {
		const experience = await Experience.findOneAndUpdate(
			{
				_id: req.body._id,
			},
			req.body,
			{
				new: true,
			}
		);
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience update successfully",
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

//Delete experience

router.post("/delete-experience", async (req, res) => {
	try {
		const experience = await Experience.findOneAndDelete({
			_id: req.body._id,
		});
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience delete successfully",
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
