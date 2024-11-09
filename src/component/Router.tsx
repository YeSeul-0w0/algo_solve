import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Main from "./Main";
import Account from "./layout/Account";
import Login from "./account/Login";
import { UserContext } from "./context/UserContext";
import SignUp from "./account/SignUp";
import Overview from "./overview/Overview";

const Router: React.FC = () => {
	const userContext = useContext(UserContext)!;
	const isLogIn = userContext.isLoggedIn;

	return (
		<BrowserRouter basename="algo_solve">
			<Routes>
				<Route path="/" element={isLogIn ? <Main /> : <Account />}>
					{isLogIn ? (
						<Route index element={<Overview />} />
					) : (
						<>
							<Route index element={<Login />} />
							<Route path="sign_up" element={<SignUp />} />
						</>
					)}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
