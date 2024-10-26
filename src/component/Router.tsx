import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./Main";
import Account from "./layout/Account";
import Login from "./account/Login";
import { UserProvider } from "./context/UserContext";
import SignUp from "./account/SignUp";

const Router: React.FC = () => {
	return (
		<UserProvider>
			<BrowserRouter basename="algo_solve">
				<Routes>
					<Route path="/" element={<Account />}>
						<Route index element={<Login />} />
						<Route path="/sign_up" element={<SignUp />} />
					</Route>
					<Route path="/main" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>

	);
};

export default Router;
