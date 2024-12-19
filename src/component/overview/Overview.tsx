import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Title from "../layout/Title";
import LeftOverview from "./LeftOverview";
import RightOverview from "./right/RightOverview";

const Overview: React.FC = () => {
	return (
		<Grid
			templateColumns="repeat(2, 1fr)"
			templateRows="1fr 10fr"
			height="100vh"
			overflow="scroll"
		>
			<GridItem colSpan={2} marginTop={9} marginLeft={3} marginBottom={3}>
				<Title description="스터디 정보를 확인하세요."></Title>
			</GridItem>
			<GridItem border="2px" borderColor="beige" borderRadius={15} m={5}>
				<LeftOverview />
			</GridItem>
			<GridItem border="2px" borderColor="beige" borderRadius={15} m={5}>
				<RightOverview />
			</GridItem>
		</Grid>
	);
};

export default Overview;
