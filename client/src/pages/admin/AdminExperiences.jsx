import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Modal, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootsSlice";
import axios from "axios";

const AdminExperiences = () => {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector(state => state.root);
	const { experiences } = portfolioData;
	const [showAddEditModal, setShowAddEditModal] = useState(false);
	const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
	const [type, setType] = useState("add");

	const onFinish = async values => {
		try {
			if (type === "add" || type === "edit") {
				dispatch(ShowLoading());
				let response;
				if (selectedItemForEdit) {
					response = await axios.post("/api/portfolio/update-experience", {
						...values,
						_id: selectedItemForEdit._id,
					});
				} else {
					response = await axios.post("/api/portfolio/add-experience", values);
				}

				dispatch(HideLoading());
				if (response.data.success) {
					message.success(response.data.message);
					setShowAddEditModal(false);
					setSelectedItemForEdit(null);
					dispatch(HideLoading());
					dispatch(ReloadData(true));
				} else {
					message.error(response.data.message);
				}
			}
		} catch (error) {
			dispatch(HideLoading());
			console.log(error);
			message.error(error.message);
		}
	};

	const onDelete = async item => {
		try {
			dispatch(ShowLoading());
			const response = await axios.post("/api/portfolio/delete-experience", {
				_id: item._id,
			});
			dispatch(HideLoading());
			if (response.data.success) {
				message.success(response.data.message);
				dispatch(HideLoading());
				dispatch(ReloadData(true));
			} else {
				message.error(response.data.message);
			}
		} catch (error) {
			dispatch(HideLoading());
			message.error(error.message);
		}
	};

	return (
		<div>
			<div className="flex justify-end">
				<button
					className="bg-fourty hover:bg-blue-300 text-tertiary font-bold py-2 px-4 rounded"
					onClick={() => {
						//setSelectedItemForEdit(null);
						setShowAddEditModal(true);
					}}
				>
					Add Experiences
				</button>
			</div>
			<div className="grid grid-cols-4 gap-5 pt-5 sm:grid-cols-1">
				{experiences.map((experience, i) => (
					<div
						key={i}
						className="shadow border p-5 border-gray-400 flex flex-col"
					>
						<h1 className="text-secondary text-xl font-bold">
							{experience.period}
						</h1>
						<hr />
						<h1>Company: {experience.company}</h1>
						<h1>Role: {experience.title}</h1>
						<h1>{experience.description}</h1>
						<div className="flex justify-end gap-5 mt-5">
							<button
								className="bg-secondary text-primary px-5 py-2 rounded-md"
								onClick={() => {
									onDelete(experience);
								}}
							>
								DELETE
							</button>
							<button
								className="bg-fourty hover:bg-blue-300 text-secondary px-5 py-2 rounded-md"
								onClick={() => {
									setSelectedItemForEdit(experience);
									setShowAddEditModal(true);
									setType("edit");
								}}
							>
								EDIT
							</button>
						</div>
					</div>
				))}
			</div>

			{(type === "add" || selectedItemForEdit) && (
				<Modal
					open={showAddEditModal}
					title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
					footer={null}
					onCancel={() => {
						setShowAddEditModal(false);
						setSelectedItemForEdit(null);
					}}
				>
					<Form
						layout="vertical"
						onFinish={onFinish}
						initialValues={selectedItemForEdit || {}}
					>
						<Form.Item name="period" label="Period">
							<input placeholder="Period" />
						</Form.Item>
						<Form.Item name="company" label="Company">
							<input placeholder="Company" />
						</Form.Item>
						<Form.Item name="title" label="Title">
							<input placeholder="Title" />
						</Form.Item>
						<Form.Item name="description" label="Description">
							<input placeholder="Description" />
						</Form.Item>
						<div className="flex justify-end">
							{/* <button
								className="border-primary text-primary px-5 py-2"
								onClick={() => {
									setShowAddEditModal(false);
									//setSelectedItemForEdit(null);
								}}
							>
								Cancel
							</button> */}
							<button className="bg-primary text-secondary px-5 py-2">
								{selectedItemForEdit ? "Update" : "Add"}
							</button>
						</div>
					</Form>
				</Modal>
			)}
		</div>
	);
};

export default AdminExperiences;
