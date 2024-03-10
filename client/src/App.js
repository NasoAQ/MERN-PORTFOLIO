import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootsSlice";

function App() {
	const { loading, portfolioData } = useSelector(state => state.root);
	const dispatch = useDispatch();

	const getPortfolioData = async () => {
		try {
			dispatch(ShowLoading(true));
			const res = await axios.get("/api/portfolio/get-portfolio-data");
			dispatch(SetPortfolioData(res.data));
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
	return (
		<BrowserRouter>
			{loading ? <Loader /> : null}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
