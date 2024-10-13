import React from "react";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

interface Props {
	description: string;
}

const Title: React.FC<Props> = ({ description }) => {
	const currentDate = new Date().toLocaleDateString();
	return (
		<Flex direction="column">
			<Heading fontSize="xl" color="navy" marginBottom={2}>
				{currentDate}
			</Heading>
			<Divider width="45%" />
			<Text fontSize="md" marginTop={2}>
				000님, {description}
			</Text>
		</Flex>
	);
};

export default Title;
