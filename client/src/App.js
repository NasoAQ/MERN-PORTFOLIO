import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
	HideLoading,
	ReloadData,
	SetPortfolioData,
	ShowLoading,
} from "./redux/rootsSlice";
import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";

function App() {
	const { loading, portfolioData, reloadData } = useSelector(
		state => state.root
	);
	const dispatch = useDispatch();

	const getPortfolioData = async () => {
		try {
			dispatch(ShowLoading(true));
			const res = await axios.get("/api/portfolio/get-portfolio-data");
			dispatch(SetPortfolioData(res.data));
			dispatch(ReloadData(false));
			dispatch(HideLoading());
		} catch (error) {
			dispatch(HideLoading());
		}
	};

	useEffect(() => {
		if (!portfolioData) {
			getPortfolioData();
		}
	}, [portfolioData]);

	useEffect(() => {
		if (reloadData) {
			getPortfolioData();
		}
	}, [reloadData]);

	return (
		<BrowserRouter>
			{loading ? <Loader /> : null}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/admin-login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
