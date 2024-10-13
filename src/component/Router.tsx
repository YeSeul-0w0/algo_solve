import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./Main";
import Loading from "./Loading";
import Overview from "./Overview/Overview";

const Router: React.FC = () => {
	return (
		<BrowserRouter basename="algo_solve">
			<Routes>
				<Route path="/" element={<Loading />} />
				<Route path="/main" element={<Main />}>
					<Route path="overview" element={<Overview />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
