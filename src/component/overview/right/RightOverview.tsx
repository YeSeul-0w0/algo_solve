import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import CalculatingDate from "../../../config/CalculatingDate";
import dummyData from "../../../config/dummy_data.json";
import StudyDate from "./StudyDate";

interface Problem {
	title: string;
	link: string;
	level: string;
}

const RightOverview: React.FC = () => {
	const { current, previous } = CalculatingDate();

	const currentBG: Problem[] = dummyData["overview"]["current_BJ"];
	const currentPG: Problem[] = dummyData["overview"]["current_PG"];

	const previousBG: Problem[] = dummyData["overview"]["previous_BJ"];
	const previousPG: Problem[] = dummyData["overview"]["previous_PG"];

	return (
		<Box m={5}>
			<StudyDate date={current} BJ={currentBG} PG={currentPG} />
			<Divider mt={30} mb={30} />
			<StudyDate date={previous} BJ={previousBG} PG={previousPG} />
		</Box>
	);
};

export default RightOverview;
