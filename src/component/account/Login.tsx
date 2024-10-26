import React, { useContext } from "react";
import {
	Box,
	Input,
	FormControl,
	FormLabel,
	Button,
	Flex
} from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const userContext = useContext(UserContext)!;

	const handleGuestLogin = () => {
		userContext.setUserName("게스트");
		navigate("/main");
	};

	const handleSignUp = () => {
		navigate("/sign_up");
	};

	// Todo: 서버 개발시 기능 개발 필

	return (
		<Box w="50%">
			<FormControl marginBottom={27}>
				<FormLabel marginLeft={2} color="navy" fontWeight="Bold" fontSize="lg">
					ID
				</FormLabel>
				<Input type="email" bg="white" borderColor="white" />
			</FormControl>
			<FormControl>
				<FormLabel marginLeft={2} color="navy" fontWeight="Bold" fontSize="lg">
					Password
				</FormLabel>
				<Input type="password" bg="white" borderColor="white" />
			</FormControl>
			<Flex justifyContent="space-between" marginTop={43}>
				<Button
					variant="outline"
					borderRadius="8"
					borderColor="navy"
					onClick={handleSignUp}
				>
					{" "}
					Sign Up{" "}
				</Button>
				<Button bg="navy" variant="solid" color="white">
					{" "}
					Login{" "}
				</Button>
			</Flex>
			<Flex marginTop={2} justifyContent="right">
				<Button variant="link" color="brown" onClick={handleGuestLogin}>
					Guest로 로그인
				</Button>
			</Flex>
		</Box>
	);
};

export default Login;
