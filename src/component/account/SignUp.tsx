import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import {
	Box,
	Text,
	FormControl,
	FormLabel,
	Input,
	Flex,
	Button,
	FormErrorMessage,
	RadioGroup,
	Radio
} from "@chakra-ui/react";
import DefaultAPI from "../../api/DefaultAPI";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

interface SignUpRequest {
	userId: string;
	password: string;
	passwordCheck: string;
	level: number;
}

const passwordRegex =
	/^(?=.*[a-z])(?=.*\d)(?=.*[~․!@#$%^&*()_\-+=\]{}|\\;:'"<>,.?/]).{8,}$/;

const APISignUp = async (data: SignUpRequest): Promise<number> => {
	try {
		const response = await DefaultAPI.post("/auth/signup", data, {
			withCredentials: true
		});
		return response.status;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error("Axios Error:", error.response?.data || error.message);
		} else {
			console.error("General Error:", error);
		}
		throw error;
	}
};

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	const userContext = useContext(UserContext)!;

	const [id, setID] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [checkPassword, setCheckPassword] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [level, setLevel] = useState<number>(1);
	const [github, setGithub] = useState<string>("");

	const [verifyFlag, setVerifyFlag] = useState<boolean>(true);
	const [syncPassword, setSyncPassword] = useState<boolean>(true);

	const checkPasswordVerify = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setPassword(input);
		if (passwordRegex.test(input)) {
			setVerifyFlag(false);
		} else {
			setVerifyFlag(true);
		}
	};

	useEffect(() => {
		setSyncPassword(password !== checkPassword);
	}, [password, checkPassword]);

	const checkDuplicateID = () => {
		console.log("check ID is already exists");
		// API 구현시 추가
	};

	const handleSignUp = () => {
		// ID 중복 확인 로직 추가 필요
		// Password 확인
		if (!verifyFlag && !syncPassword) {
			if (level && id) {
				const signUpInfo = {
					userId: id,
					password: password,
					passwordCheck: checkPassword,
					level: level
				};
				APISignUp(signUpInfo);
				userContext.setIsLoggedIn(true);
				navigate("/");
			}
		}
	};

	return (
		<Box w="55%" bg="white" p={10} borderColor="beige" borderRadius={15}>
			<Text fontSize="xl" textAlign="center" mb={10}>
				알고 풀자, 회원 가입을 진행해주세요.
			</Text>
			<FormControl isRequired mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					ID
				</FormLabel>
				<Flex gap={3}>
					<Input
						type="text"
						bg="white"
						borderColor="beige"
						value={id}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setID(e.target.value)
						}
					/>
					<Button
						bg="deepBeige"
						variant="solid"
						color="white"
						onClick={checkDuplicateID}
					>
						중복 확인
					</Button>
				</Flex>
			</FormControl>
			<FormControl
				isRequired
				mb={5}
				isInvalid={verifyFlag && password.length > 0}
			>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Password
				</FormLabel>
				<Input
					type="password"
					bg="white"
					borderColor="beige"
					value={password}
					onChange={checkPasswordVerify}
				/>
				<FormErrorMessage>
					비밀번호는 영문, 숫자, 특수문자를 하나씩 포함하여 8자 이상 작성되어야
					합니다.{" "}
				</FormErrorMessage>
			</FormControl>
			<FormControl
				isRequired
				mb={5}
				isInvalid={syncPassword && checkPassword.length > 0}
			>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Password Check
				</FormLabel>
				<Input
					type="password"
					bg="white"
					borderColor="beige"
					value={checkPassword}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setCheckPassword(e.target.value)
					}
				/>
				<FormErrorMessage>비밀번호가 일치하지 않습니다.</FormErrorMessage>
			</FormControl>
			<FormControl isRequired mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Name
				</FormLabel>
				<Input
					type="text"
					bg="white"
					borderColor="beige"
					value={name}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
				/>
			</FormControl>
			<FormControl isRequired mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Level
				</FormLabel>
				<RadioGroup
					defaultValue={String(level)}
					onChange={value => setLevel(Number(value))}
					marginLeft={10}
					marginRight={10}
				>
					<Flex direction="row" justifyContent="space-between">
						<Radio colorScheme="orange" value="1">
							레벨 1
						</Radio>
						<Radio colorScheme="orange" value="2">
							레벨 2
						</Radio>
						<Radio colorScheme="orange" value="3">
							레벨 3
						</Radio>
					</Flex>
				</RadioGroup>
			</FormControl>
			<FormControl mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Github - Repository
				</FormLabel>
				<Input
					type="text"
					bg="white"
					borderColor="beige"
					value={github}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setGithub(e.target.value)
					}
				/>
			</FormControl>
			<Flex marginTop={2} justifyContent="right">
				<Button bg="navy" variant="solid" color="white" onClick={handleSignUp}>
					Signup
				</Button>
			</Flex>
		</Box>
	);
};

export default SignUp;
