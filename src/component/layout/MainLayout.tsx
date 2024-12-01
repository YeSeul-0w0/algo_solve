import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
	return (
		<Grid
			height="100vh"
			width="100vw"
			position="fixed"
			templateRows="1fr 10fr"
			templateColumns="2fr 12fr"
		>
			<GridItem rowSpan={2} bg="lightBeige" m={1} borderRadius="20px">
				<Sidebar />
			</GridItem>
			<Outlet />
		</Grid>
	);
};

export default MainLayout;
