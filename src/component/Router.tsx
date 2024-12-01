import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import MainLayout from "./layout/MainLayout";
import Account from "./layout/Account";
import Login from "./account/Login";
import { UserContext } from "./context/UserContext";
import SignUp from "./account/SignUp";
import Overview from "./overview/Overview";
import AddProblem from "./addProblem/AddProblem";
import MyPage from "./mypage/MyPage";
import Github from "./github/Github";

const Router: React.FC = () => {
	const userContext = useContext(UserContext)!;
	const isLogIn = userContext.isLoggedIn;

	return (
		<BrowserRouter basename="algo_solve">
			<Routes>
				<Route path="/" element={isLogIn ? <MainLayout /> : <Account />}>
					{isLogIn ? (
						<>
							<Route index element={<Overview />} />
							<Route path="/add_problem" element={<AddProblem />} />
							<Route path="/my_page" element={<MyPage />} />
							<Route path="/github" element={<Github />} />
						</>
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
