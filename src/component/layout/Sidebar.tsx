import React, { useContext } from "react";
import { Button, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ROUTE = {
	overview: "/",
	addProblem: "/add_problem",
	myPage: "/my_page",
	github: "/github"
} as const;

type PathValues = (typeof ROUTE)[keyof typeof ROUTE];
type ButtonItem = {
	label: string;
	route: PathValues;
};

const Sidebar: React.FC = () => {
	const navigate = useNavigate();
	const currentLocation = useLocation();

	const buttonList: ButtonItem[] = [
		{ label: "Overview", route: ROUTE.overview },
		{ label: "Add Problem", route: ROUTE.addProblem },
		{ label: "MyPage", route: ROUTE.myPage },
		{ label: "Github", route: ROUTE.github }
	];

	const handlePage = (path: PathValues) => {
		navigate(path);
	};

	const buttonStyle = (path: PathValues) => ({
		variant: "ghost",
		color: "navy",
		bg: currentLocation.pathname === path ? "deepBeige" : "transparent",
		_hover: { bg: "beige" }
	});

	const userContext = useContext(UserContext)!;

	const handleLogout = () => {
		localStorage.removeItem("userName");
		localStorage.removeItem("isLoggedIn");

		userContext.setUserName("");
		userContext.setIsLoggedIn(false);
	};

	return (
		<Flex height="100vh" direction="column" alignItems="center">
			<Flex mt={6} direction="column" alignItems="center">
				<Text fontSize="4xl" color="navy">
					알고 풀자
				</Text>
				<Text fontSize="lg" color="lightGray">
					AlgoSolve
				</Text>
			</Flex>
			<Divider mt={1} />
			<VStack width="100%" align="stretch" spacing={4} mt={6}>
				{buttonList.map((button, index) => (
					<Button
						key={index}
						{...buttonStyle(button.route)}
						onClick={() => handlePage(button.route)}
					>
						{button.label}
					</Button>
				))}
			</VStack>
			<Flex mt="auto" mb={20}>
				<Button variant="link" color="black" onClick={handleLogout}>
					로그아웃
				</Button>
			</Flex>
		</Flex>
	);
};

export default Sidebar;
