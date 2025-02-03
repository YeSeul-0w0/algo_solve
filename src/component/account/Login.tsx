import React, { ChangeEvent, useContext, useState } from "react";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input
} from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import DefaultAPI from "../../api/DefaultAPI";
import axios from "axios";
import OpenToast from "../../config/OpenToast";

interface LoginRequest {
	userId: string;
	password: string;
}

interface LoginResponse {
	accessToken: string;
	nickName: string;
}

const Login: React.FC = () => {
	const [userId, setUserId] = useState<string>("");
	const [userPassword, setUserPassword] = useState<string>("");
	const [loading, setLoading] = useState(false);

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

	const APILogin = async (data: LoginRequest): Promise<void> => {
		try {
			const response = await DefaultAPI.post<LoginResponse>(
				"/auth/login",
				data,
				{ withCredentials: true }
			);
			userContext.setAccessToken(response.data.accessToken);
			userContext.setUserName(response.data.nickName);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					OpenToast({ message: error.response.data.message, status: "error" });
				} else {
					OpenToast({ message: "관리자에게 문의하세요.", status: "error" });
				}
			}
			throw error;
		}
	};

	const LoginInfo: LoginRequest = {
		userId: userId,
		password: userPassword
	};

	const handleLogin = async () => {
		setLoading(true);
		try {
			await APILogin(LoginInfo);
			userContext.setIsLoggedIn(true);
			navigate("/");
		} catch (error) {
			OpenToast({ message: "로그인을 실패했습니다.", status: "error" });
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box w="50%">
			<FormControl marginBottom={27}>
				<FormLabel marginLeft={2} color="navy" fontWeight="Bold" fontSize="lg">
					ID
				</FormLabel>
				<Input
					type="email"
					bg="white"
					borderColor="white"
					value={userId}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setUserId(e.target.value)
					}
				/>
			</FormControl>
			<FormControl>
				<FormLabel marginLeft={2} color="navy" fontWeight="Bold" fontSize="lg">
					Password
				</FormLabel>
				<Input
					type="password"
					bg="white"
					borderColor="white"
					value={userPassword}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setUserPassword(e.target.value)
					}
				/>
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
				<Button
					bg="navy"
					variant="solid"
					color="white"
					onClick={handleLogin}
					disabled={loading}
				>
					Login
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
