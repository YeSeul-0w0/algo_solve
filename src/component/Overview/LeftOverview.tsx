import React from "react";
import {
	Button,
	Box,
	Grid,
	GridItem,
	Text,
	Table,
	Thead,
	Th,
	Tr,
	Tbody,
	Td
} from "@chakra-ui/react";

const LeftOverview: React.FC = () => {
	const userName: String = "Guest";

	const [isAttend, setIsAttend] = React.useState(false);

	const [isSolveB, setIsSolveB] = React.useState(false);

	const [isSolveP, setIsSolveP] = React.useState(false);

	const handleToggle =
		(setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
			setter(prev => !prev);
		};

	const buttonStyle = (isActive: boolean) => ({
		bg: isActive ? "lightBeige" : "transparent",
		variant: isActive ? "solid" : "outline",
		borderColor: "deepBeige",
		size: "sm",
		_hover: { bg: "beige" }
	});

	return (
		<Box>
			<Box m={5}>
				<Text fontSize="lg" fontWeight="semibold">
					{userName}님 정보
				</Text>
				<Grid
					templateColumns="0.8fr 1fr 1fr 1fr 1fr"
					templateRows="1fr 1fr"
					p={5}
					gap={3}
				>
					<GridItem alignContent="center">
						<Text fontWeight="semibold" fontSize="md">
							Attend
						</Text>
					</GridItem>
					<GridItem colSpan={4} alignContent="center">
						<Button
							onClick={handleToggle(setIsAttend)}
							{...buttonStyle(isAttend)}
						>
							{" "}
							{isAttend ? "Yes" : "No"}
						</Button>
					</GridItem>
					<Text fontWeight="semibold" fontSize="md">
						Solved
					</Text>
					<GridItem colSpan={2} display="flex" gap={5} alignItems="center">
						<Text fontSize="md">BackJoon</Text>
						<Button
							onClick={handleToggle(setIsSolveB)}
							{...buttonStyle(isSolveB)}
						>
							{isSolveB ? "Yes" : "No"}
						</Button>
					</GridItem>
					<GridItem colSpan={2} display="flex" gap={5} alignItems="center">
						<Text fontSize="md">Programmers</Text>
						<Button
							onClick={handleToggle(setIsSolveP)}
							{...buttonStyle(isSolveP)}
						>
							{isSolveP ? "Yes" : "No"}
						</Button>
					</GridItem>
				</Grid>
			</Box>
			<Box m={5}>
				<Text fontSize="lg" fontWeight="semibold">
					스터디원 정보
				</Text>
				<Table mt={6}>
					<Thead>
						<Tr>
							<Th textAlign="center" fontWeight="semibold" fontSize="md">
								Attend
							</Th>
							<Th textAlign="center" fontWeight="semibold" fontSize="md">
								BackJoon Solved
							</Th>
							<Th textAlign="center" fontWeight="semibold" fontSize="md">
								Programmers Solved
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td textAlign="center">
								<Text fontWeight="normal" size="sm">
									5
								</Text>
							</Td>
							<Td textAlign="center">
								<Text fontWeight="normal" size="sm">
									2
								</Text>
							</Td>
							<Td textAlign="center">
								<Text fontWeight="normal" size="sm">
									5
								</Text>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</Box>
		</Box>
	);
};

export default LeftOverview;
