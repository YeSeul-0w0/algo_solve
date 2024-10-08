import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./Main";
import Loading from "./Loading";

const Router: React.FC = () => {
	return (
		<BrowserRouter basename="algo-solve">
			<Routes>
				<Route path="/" element={<Loading />} />
				<Route path="/main" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
