import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./layout/Sidebar";
import Title from "./Title/Title";

const Main: React.FC = () => {
	return (
		<Grid
			height="100vh"
			width="100%"
			templateRows="1fr 10fr"
			templateColumns="0.7fr 2fr 2fr"
		>
			<GridItem rowSpan={2} bg="lightBeige" m={1} borderRadius="20px">
				<Sidebar />
			</GridItem>
			<GridItem colSpan={2} marginTop={9} marginLeft={3} marginBottom={3}>
				<Title />
			</GridItem>
			<GridItem>Left</GridItem>
			<GridItem>Right</GridItem>
		</Grid>
	);
};

export default Main;
