import React from "react";
import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

const LeftOverview: React.FC = () => {
	return (
		<Flex>
			<Grid templateColumns="1fr 1fr" templateRows="repeat(4, lfr)">
				<GridItem colSpan={2}>
					<Text fontSize="md">000님 정보</Text>
				</GridItem>
				<GridItem colSpan={2}>참석여부</GridItem>
				<GridItem>백준 풀이</GridItem>
				<GridItem>프로그래머스 풀이</GridItem>
				<GridItem colSpan={2}>
					<Button> 등록 </Button>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default LeftOverview;
