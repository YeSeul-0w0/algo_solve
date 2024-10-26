import React from "react";
import {
	Box,
	Text,
	FormControl,
	FormLabel,
	Input,
	Select,
	Flex,
	Button
} from "@chakra-ui/react";

const SignUp: React.FC = () => {
	// 추후에 서버에서 가져올 예정
	const levelInfo: string[] = ["레벨 1", "레벨 2", "레벨 3"];

	// Todo: 서버 개발시 기능 개발 필
	return (
		<Box w="50%" bg="white" p={10} borderColor="beige" borderRadius={15}>
			<Text fontSize="xl" textAlign="center" mb={10}>
				알고 풀자, 회원 가입을 진행해주세요.
			</Text>
			<FormControl isRequired mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					ID
				</FormLabel>
				<Input type="email" bg="white" borderColor="beige" />
			</FormControl>
			<FormControl isRequired mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Password
				</FormLabel>
				<Input type="password" bg="white" borderColor="beige" />
			</FormControl>
			<FormControl isRequired mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Password Check
				</FormLabel>
				<Input type="password" bg="white" borderColor="beige" />
			</FormControl>
			<FormControl isRequired mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Level
				</FormLabel>
				<Select placeholder="레벨은 선택하세요." borderColor="beige">
					{levelInfo.map((level, index) => (
						<option key={index} value={level}>
							{level}
						</option>
					))}
				</Select>
			</FormControl>
			<FormControl mb={5}>
				<FormLabel color="navy" fontWeight="Bold" fontSize="lg">
					Github - Repository
				</FormLabel>
				<Input type="text" bg="white" borderColor="beige" />
			</FormControl>
			<Flex marginTop={2} justifyContent="right">
				<Button bg="navy" variant="solid" color="white">
					Signup
				</Button>
			</Flex>
		</Box>
	);
};

export default SignUp;
