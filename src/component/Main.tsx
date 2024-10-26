import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./layout/Sidebar";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
	return (
		<Grid
			height="100vh"
			width="100%"
			templateRows="1fr 10fr"
			templateColumns="2fr 10fr"
		>
			<GridItem rowSpan={2} bg="lightBeige" m={1} borderRadius="20px">
				<Sidebar />
			</GridItem>
			<Outlet />
		</Grid>
	);
};

export default Main;
