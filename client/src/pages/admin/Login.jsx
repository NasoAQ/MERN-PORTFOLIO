import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { HideLoading, ShowLoading } from "../../redux/rootsSlice";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";

const Login = () => {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const dispatch = useDispatch();

	const login = async () => {
		try {
			dispatch(ShowLoading());
			const res = await axios.post("/api/portfolio/admin-login", user);
			dispatch(HideLoading());
			if (res.data.success) {
				message.success(res.data.message);
				localStorage.setItem("token", JSON.stringify(res.data));
				window.location.href = "/admin";
			} else {
				message.error(res.data.message);
			}
		} catch (error) {
			message.error(error.message);
			dispatch(HideLoading());
		}
	};

	return (
		<div className="flex justify-center flex-col items-center h-screen bg-primary">
			<Header />
			<div className="w-96 flex gap-5 p-5 shadow border border-gray-400 flex-col bg-fourty">
				<h1 className="text-2xl">Portfolio Admin Login</h1>
				<hr />
				<input
					type="text"
					value={user.username}
					onChange={e => setUser({ ...user, username: e.target.value })}
					placeholder="Username"
				/>
				<input
					type="password"
					value={user.password}
					onChange={e =>
						setUser({
							...user,
							password: e.target.value,
						})
					}
					placeholder="Password"
				/>
				<button
					className="bg-tertiary text-primary p-2 rounded-lg"
					onClick={login}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
