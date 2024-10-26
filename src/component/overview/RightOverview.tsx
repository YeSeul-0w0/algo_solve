import React from "react";
import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	Link,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr
} from "@chakra-ui/react";
import CalculatingDate from "../../config/CalculatingDate";
import dummyData from "../../config/dummy_data.json";
import ProblemList from "./ProblemList";

interface Problem {
	title: string;
	link: string;
	level: string;
}

const RightOverview: React.FC = () => {
	const { current, next } = CalculatingDate();

	const currentBG: Problem[] = dummyData["overview"]["current_BJ"];
	const currentPG: Problem[] = dummyData["overview"]["current_PG"];

	const previousBG: Problem[] = dummyData["overview"]["previous_BJ"];
	const previousPG: Problem[] = dummyData["overview"]["previous_PG"];

	return (
		<Box m={5}>
			<Flex justifyContent="space-between">
				<Text fontWeight="bold" fontSize="xl">
					{current}
				</Text>
				<Button
					border="1px"
					borderColor="deepBeige"
					variant="outline"
					borderRadius={5}
				>
					Level
				</Button>
			</Flex>
			<Grid templateColumns="1fr 1fr" gap={5} mt={5}>
				<ProblemList title="백준" problems={currentBG} />
				<ProblemList title="프로그래머스" problems={currentPG} />
			</Grid>
			<Flex justifyContent="space-between" mt={10}>
				<Text fontWeight="bold" fontSize="xl">
					{next}
				</Text>
				<Button
					border="1px"
					borderColor="deepBeige"
					variant="outline"
					borderRadius={5}
				>
					Level
				</Button>
			</Flex>
			<Grid templateColumns="1fr 1fr" gap={5} mt={5}>
				<ProblemList title="백준" problems={previousBG} />
				<ProblemList title="프로그래머스" problems={previousPG} />
			</Grid>
		</Box>
	);
};

export default RightOverview;
