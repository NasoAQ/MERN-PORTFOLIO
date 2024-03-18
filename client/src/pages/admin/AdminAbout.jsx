import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootsSlice";
import axios from "axios";
import { message } from "antd";

const AdminAbout = () => {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector(state => state.root);
	const onFinish = async values => {
		try {
			const tempSkills = values.skills.split(" , ");
			values.skills = tempSkills;
			dispatch(ShowLoading());
			const response = await axios.post("/api/portfolio/update-about", {
				...values,
				_id: portfolioData.about[0]._id,
			});
			dispatch(HideLoading());
			if (response.data.success) {
				message.success(response.data.message);
			} else {
				message.error(response.data.message);
			}
		} catch (error) {
			dispatch(HideLoading());
			console.log(error);
			message.error(error.message);
		}
	};

	return (
		<div>
			<Form
				onFinish={onFinish}
				layout="vertical"
				initialValues={{
					...portfolioData.about[0],
					skills: portfolioData.about[0].skills.join(" , "),
				}}
			>
				<Form.Item name="lottieURL" label="Lottie URL">
					<input placeholder="Lottie URL" />
				</Form.Item>

				<Form.Item name="description1" label="Description1">
					<textarea placeholder="Description1" />
				</Form.Item>
				<Form.Item name="description2" label="Description2">
					<textarea placeholder="Description2" />
				</Form.Item>
				<Form.Item name="skills" label="Skills">
					<textarea placeholder="Skills" />
				</Form.Item>
				<div className="flex justify-end">
					<button
						className="px-10 py-2 bg-primary text-secondary rounded-3xl"
						type="submit"
					>
						SAVE
					</button>
				</div>
			</Form>
		</div>
	);
};

export default AdminAbout;
