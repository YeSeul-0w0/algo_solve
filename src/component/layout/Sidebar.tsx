import React from "react";
import { Button, Divider, Flex, Text, VStack } from "@chakra-ui/react";

const Sidebar: React.FC = () => {
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
				<Button variant="ghost" color="navy" _hover={{ bg: "beige" }}>
					Overview
				</Button>
				<Button variant="ghost" color="navy" _hover={{ bg: "beige" }}>
					Add Problem
				</Button>
				<Button variant="ghost" color="navy" _hover={{ bg: "beige" }}>
					MyPage
				</Button>
				<Button variant="ghost" color="navy" _hover={{ bg: "beige" }}>
					Github
				</Button>
			</VStack>
			<Flex mt="auto" mb={20}>
				<Button variant="link" color="black">
					로그아웃
				</Button>
			</Flex>
		</Flex>
	);
};

export default Sidebar;
