import React from "react";
import {
	Box,
	Input,
	FormControl,
	FormLabel,
	Button,
	Flex
} from "@chakra-ui/react";

const Login: React.FC = () => {
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
				<Button variant="outline" borderRadius="8" borderColor="navy">
					{" "}
					Sign Up{" "}
				</Button>
				<Button bg="navy" variant="solid" color="white">
					{" "}
					Login{" "}
				</Button>
			</Flex>
		</Box>
	);
};

export default Login;
