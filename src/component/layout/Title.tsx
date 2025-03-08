import React, { useContext } from "react";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";

interface Props {
	description: string;
}

const Title: React.FC<Props> = ({ description }) => {
	const currentDate = new Date().toLocaleDateString();
	const userContext = useContext(UserContext)!;
	const userName: String = userContext.nickName;

	return (
		<Flex direction="column">
			<Heading fontSize="xl" color="navy" marginBottom={2}>
				{currentDate}
			</Heading>
			<Divider width="45%" />
			<Text fontSize="md" marginTop={2}>
				{userName}님, {description}
			</Text>
		</Flex>
	);
};

export default Title;
