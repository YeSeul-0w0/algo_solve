import React, { ChangeEvent, useContext, useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { login, LoginRequest } from "../../api/Login";

const Login: React.FC = () => {
  const [userId, setUserId] = useState<string>("")
  const [userPassword, setUserPassword] = useState<string>("");

	const navigate = useNavigate();
	const userContext = useContext(UserContext)!;

	const handleGuestLogin = () => {
		userContext.setUserName("Guest");
		userContext.setIsLoggedIn(true);
		navigate("/");
	};

	const handleSignUp = () => {
		navigate("/sign_up");
	};

  const getUserId = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  }

  const getUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  }

  const LoginInfo: LoginRequest = {
    userId: userId,
    password: userPassword,
  }

  const handleLogin = () => {
    login(LoginInfo)
  }

	return (
		<Box w="50%">
			<FormControl marginBottom={27}>
				<FormLabel marginLeft={2} color="navy" fontWeight="Bold" fontSize="lg">
					ID
				</FormLabel>
				<Input type="email" bg="white" borderColor="white" value={userId} onChange={getUserId}/>
			</FormControl>
			<FormControl>
				<FormLabel marginLeft={2} color="navy" fontWeight="Bold" fontSize="lg">
					Password
				</FormLabel>
				<Input type="password" bg="white" borderColor="white" value={userPassword} onChange={getUserPassword}/>
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
				<Button bg="navy" variant="solid" color="white" onClick={handleLogin}>
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
