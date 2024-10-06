import React from "react";
import {
	Box,
	Button,
	Flex,
	Text,
	VStack
} from "@chakra-ui/react";

const Sidebar: React.FC = () => {
	return (
		<Box width="100%" height="100vh" p={4}>
			<Flex height="100vh">
				<Box width="200px" boxShadow="lg" p={4}>
					<VStack spacing={4} align="stretch">
						<Box fontSize="2xl" fontWeight="bold" mb={4}>
							타이틀
						</Box>
						<Button variant="ghost">A</Button>
						<Button variant="ghost">B</Button>
						<Button variant="ghost">C</Button>
						<Button variant="ghost">D</Button>
						<Button
							variant="solid"
							colorScheme="red"
							mt="auto"
						>
							로그아웃
						</Button>
					</VStack>
				</Box>
			</Flex>
		</Box>
	);
};
export default Sidebar;
