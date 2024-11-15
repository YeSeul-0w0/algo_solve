import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Title from "../title/Title";

const AddProblem: React.FC = () => {
	return (
		<Grid
			templateColumns="repeat(2, 1fr)"
			templateRows="1fr 10fr"
			height="100vh"
		>
			<GridItem colSpan={2} marginTop={9} marginLeft={3} marginBottom={3}>
				<Title description="스터디 문제를 등록해주세요."></Title>
			</GridItem>
			<GridItem border="2px" borderColor="beige" borderRadius={15} m={5}>
				Left
			</GridItem>
			<GridItem border="2px" borderColor="beige" borderRadius={15} m={5}>
				Right
			</GridItem>
		</Grid>
	);
};

export default AddProblem;
