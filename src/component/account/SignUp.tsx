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
import OpenToast from "../../config/OpenToast";
import openToast from "../../config/OpenToast";

interface SignUpRequest {
	userId: string;
	password: string;
	passwordCheck: string;
	level: number;
}

const errorCodeMapping: Record<number, string> = {
	4010: "이미 사용 중인 아이디 입니다.",
	4000: "입력하신 정보를 확인해주세요."
};

const handleErrorMessage = (statusCode: number): string => {
	return errorCodeMapping[statusCode] || "관리자에게 문의하세요.";
};

const passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

const APISignUp = async (data: SignUpRequest): Promise<void> => {
	try {
		await DefaultAPI.post("/auth/signup", data, {
			withCredentials: true
		});
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response) {
				const getResponse = error.response.data;
				console.log(getResponse);
				openToast({
					message: handleErrorMessage(getResponse.status),
					status: "error"
				});
			} else {
				OpenToast({ message: "관리자에게 문의하세요.", status: "error" });
			}
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

	const [duplication, setDuplication] = useState<boolean>(false);
	const [verifyPassword, setVerifyPassword] = useState<boolean>(true);
	const [syncPassword, setSyncPassword] = useState<boolean>(false);

	useEffect(() => {
		setSyncPassword(password !== checkPassword);
	}, [password, checkPassword]);

	const checkPasswordVerify = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setPassword(input);
		if (passwordRegex.test(input)) {
			setVerifyPassword(false);
		} else {
			setVerifyPassword(true);
		}
	};

	const checkDuplicateID = async () => {
		try {
			const response = await DefaultAPI.post(
				"/auth/checkId",
				{ id: id },
				{ withCredentials: true }
			);
			if (response.status === 200) {
				setDuplication(false);
				openToast({ message: "사용 가능한 아이디 입니다.", status: "success" });
			} else {
				setDuplication(true);
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					const getResponse = error.response.data;
					OpenToast({
						message: handleErrorMessage(getResponse.status),
						status: "error"
					});
				} else {
					OpenToast({ message: "관리자에게 문의하세요.", status: "error" });
				}
			}
		}
	};

	const handleSignUp = async () => {
		// ID 중복 확인 로직 추가 필요
		// Password 확인
		if (!duplication && !syncPassword && !verifyPassword) {
			if (level && id) {
				const signUpInfo = {
					userId: id,
					password: password,
					passwordCheck: checkPassword,
					nickName: name,
					level: level
				};
				try {
					await APISignUp(signUpInfo);
					userContext.setIsLoggedIn(true);
					navigate("/");
				} catch (error) {
					OpenToast({ message: "회원가입에 실패했습니다.", status: "error" });
				}
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
				isInvalid={verifyPassword && password.length > 0}
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
