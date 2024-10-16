import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./Main";
import Account from "./layout/Account";

const Router: React.FC = () => {
	return (
		<BrowserRouter basename="algo_solve">
			<Routes>
				<Route path="/" element={<Account />} />
				<Route path="/main" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
