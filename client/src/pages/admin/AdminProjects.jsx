import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Modal, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootsSlice";
import axios from "axios";

const AdminProjects = () => {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector(state => state.root);
	const { projects } = portfolioData;
	const [showAddEditModal, setShowAddEditModal] = useState(false);
	const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
	const [type, setType] = useState("add");

	const onFinish = async values => {
		try {
			const tempTechnologies = values?.technologies?.split(" , ") || [];
			values.technologies = tempTechnologies;
			dispatch(ShowLoading());
			let response;
			if (selectedItemForEdit) {
				response = await axios.post("/api/portfolio/update-project", {
					...values,
					_id: selectedItemForEdit._id,
				});
			} else {
				response = await axios.post("/api/portfolio/add-project", values);
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
		} catch (error) {
			dispatch(HideLoading());
			console.log(error);
			message.error(error.message);
		}
	};

	const onDelete = async item => {
		try {
			dispatch(ShowLoading());
			const response = await axios.post("/api/portfolio/delete-project", {
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
					className="bg-blue-500 hover:bg-blue-700 text-primary font-bold py-2 px-4 rounded"
					onClick={() => {
						//setSelectedItemForEdit(null);
						setShowAddEditModal(true);
					}}
				>
					Add Project
				</button>
			</div>
			<div className="grid grid-cols-3 gap-5 pt-5 sm:grid-cols-1">
				{projects.map((project, i) => (
					<div
						key={i}
						className="shadow border p-5 border-gray-400 flex flex-col gap-5"
					>
						<h1 className="text-secondary text-xl font-bold">
							{project.title}
						</h1>
						<hr />
						<img src={project.image} alt="" />
						<h2 className="font-bold text-tertiary">Description:</h2>
						<p>{project.description}</p>
						<h2 className="font-bold text-tertiary">Technologies:</h2>
						<p>{project.technologies}</p>

						<div className="flex justify-end gap-5 mt-5">
							<button
								className="bg-secondary text-primary px-5 py-2 rounded-md"
								onClick={() => {
									onDelete(project);
								}}
							>
								DELETE
							</button>
							<button
								className="bg-primary text-secondary px-5 py-2 rounded-md"
								onClick={() => {
									setSelectedItemForEdit(project);
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
					title={selectedItemForEdit ? "Edit Project" : "Add Project"}
					footer={null}
					onCancel={() => {
						setShowAddEditModal(false);
						setSelectedItemForEdit(null);
					}}
				>
					<Form
						layout="vertical"
						onFinish={onFinish}
						initialValues={
							{
								...selectedItemForEdit,
								technologies: selectedItemForEdit?.technologies?.join(" , "),
							} || {}
						}
					>
						<Form.Item name="title" label="Title">
							<input placeholder="Title" />
						</Form.Item>
						<Form.Item name="image" label="Image URL">
							<input placeholder="Image" />
						</Form.Item>
						<Form.Item name="description" label="Description">
							<textarea placeholder="Description" />
						</Form.Item>
						<Form.Item name="link" label="Link">
							<input placeholder="Link" />
						</Form.Item>
						<Form.Item name="technologies" label="Technologies">
							<input placeholder="Technologies" />
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

export default AdminProjects;
