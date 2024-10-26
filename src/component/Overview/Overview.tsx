import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Title from "../Title/Title";
import LeftOverview from "./LeftOverview";

const Overview: React.FC = () => {
	return (
		<Grid
			templateColumns="repeat(2, 1fr)"
			templateRows="1fr 10fr"
			height="100%"
			width="100%"
		>
			<GridItem colSpan={2} marginTop={9} marginLeft={3} marginBottom={3}>
				<Title description="스터디 정보를 확인하세요." />
			</GridItem>
			<GridItem>
				<LeftOverview />
			</GridItem>
			<GridItem>Right</GridItem>
		</Grid>
	);
};

export default Overview;
