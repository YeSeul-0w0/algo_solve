import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Account: React.FC = () => {
	return (
		<Grid
			width="100vw"
			height="100vh"
			templateColumns="0.3fr 1fr"
			background="lightBeige"
		>
			<GridItem
				display="flex"
				alignItems="center"
				justifyContent="center"
				flexDir="column"
			>
				<Text fontSize="5xl" color="navy">
					알고 풀자
				</Text>
				<Text fontSize="lg" color="lightGray">
					AlgoSolve
				</Text>
			</GridItem>
			<GridItem
				borderLeftWidth="4px"
				borderLeftColor="deepBeige"
				borderLeftStyle="solid"
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
			>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default Account;
