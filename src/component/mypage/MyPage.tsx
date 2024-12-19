import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Title from "../layout/Title";

const MyPage: React.FC = () => {
	return (
		<Grid
			templateColumns="repeat(2, 1fr)"
			templateRows="1fr 10fr"
			height="100vh"
		>
			<GridItem colSpan={2} marginTop={9} marginLeft={3} marginBottom={3}>
				<Title description="마이페이지 입니다."></Title>
			</GridItem>
		</Grid>
	);
};

export default MyPage;
