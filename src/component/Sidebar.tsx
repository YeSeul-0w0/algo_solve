import React from "react";
import colors from "../../config/color.json";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";

const Sidebar: React.FC = () => {
	return (
		<Box width="100%" height="100vh" p={4}>
			<Flex height="100vh" direction="column">
				<Box width="100%" p={4}>
					<Box fontSize="2xl" fontWeight="bold" mb={4}>
						타이틀
					</Box>
					<VStack align="stretch">
						<Button variant="ghost">Overview</Button>
						<Button variant="ghost">Add Problem</Button>
						<Button variant="ghost">MyPage</Button>
						<Button variant="ghost">Github</Button>
					</VStack>
				</Box>
				<Button variant="link">로그아웃</Button>
			</Flex>
		</Box>
	);
};

export default Sidebar;
