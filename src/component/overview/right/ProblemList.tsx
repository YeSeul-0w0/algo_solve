import React from "react";
import {
	Box,
	Flex,
	Heading,
	Link,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr
} from "@chakra-ui/react";

interface Problem {
	title: string;
	link: string;
	level: string;
}

interface Props {
	title: string;
	problems: Problem[];
}
const ProblemList: React.FC<Props> = ({ title, problems }) => (
	<Box border="1px" borderColor="beige" borderRadius={15} p={3}>
		<Flex direction="column" justifyContent="center" alignContent="center">
			<Heading size="md" textAlign="center">
				{title}
			</Heading>
			<Table mt={6}>
				<Thead>
					<Tr>
						<Th textAlign="center" fontWeight="semibold" fontSize="md">
							문제명
						</Th>
						<Th textAlign="center" fontWeight="semibold" fontSize="md">
							레벨
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{problems.map((value, index) => (
						<Tr key={index}>
							<Td textAlign="center">
								<Link
									href={value.link}
									color="deepBlue"
									variant="underline"
									isExternal
								>
									{value.title}
								</Link>
							</Td>
							<Td textAlign="center">{value.level}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Flex>
	</Box>
);

export default ProblemList;
