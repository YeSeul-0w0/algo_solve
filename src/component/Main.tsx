import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const Main: React.FC = () => {
	return (
		<Flex>
			<Box
				margin={2}
				w="14%"
				h="100%"
				background="lightBeige"
				borderRadius="25px"
			>
				<Sidebar />
			</Box>
			<Box w="43%" h="100%">
				<Flex flex={1} direction="column" p={4}>
					<Text fontSize="xl" mb={4}>
						Left
					</Text>
					<Box>Content</Box>
				</Flex>
			</Box>
			<Box w="43%" h="100%">
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
