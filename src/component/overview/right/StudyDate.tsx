import React from "react";
import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import ProblemList from "./ProblemList";

interface Problem {
	title: string;
	link: string;
	level: string;
}

interface Props {
	date: string;
	BJ: Problem[];
	PG: Problem[];
}

const StudyDate: React.FC<Props> = ({ date, BJ, PG }) => {
	return (
		<>
			<Flex justifyContent="space-between">
				<Text fontWeight="bold" fontSize="xl">
					{date}
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
				<ProblemList title="백준" problems={BJ} />
				<ProblemList title="프로그래머스" problems={PG} />
			</Grid>
		</>
	);
};

export default StudyDate;
