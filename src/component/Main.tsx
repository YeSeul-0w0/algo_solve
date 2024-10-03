import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "./layout/Sidebar";

const Main: React.FC = () => {
	return (
		<Flex height="100vh" width="100%">
			<Box margin={2} w="16%" h="100%">
				<Sidebar />
			</Box>
			<Box w="42%" h="100%">
				<Flex flex={1} direction="column" p={4}>
					<Text fontSize="xl" mb={4}>
						Left
					</Text>
					<Box>Content</Box>
				</Flex>
			</Box>
			<Box w="42%" h="100%">
				<Flex flex={1} direction="column" p={4}>
					<Text fontSize="xl" mb={4}>
						Right
					</Text>
					<Box>Content</Box>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Main;
