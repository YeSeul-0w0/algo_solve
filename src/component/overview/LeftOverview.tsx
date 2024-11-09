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
import dummyData from "../../config/dummy_data.json";

interface Person {
	name: string;
	attend: string;
	backjoon: string;
	programmers: string;
}

interface DummyUser extends Array<Person> {}

interface Overview {
	attend: number;
	backjoon: number;
	programmers: number;
}

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

	const totalDummy = dummyData["overview"]["total"] as Overview;
	const personDummy = dummyData["overview"]["people"] as DummyUser;

	return (
		<Box>
			<Box m={5}>
				<Text fontSize="lg" fontWeight="semibold">
					{userName}님 정보
				</Text>
				<Grid
					templateColumns="0.8fr 1fr 1fr 1fr 1fr"
					templateRows="1fr 1fr 1fr"
					p={5}
					gap={3}
				>
					<GridItem alignContent="center">
						<Text fontWeight="semibold" fontSize="md">
							참석
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
					<Text fontWeight="semibold" fontSize="md" alignContent="center">
						풀이여부
					</Text>
					<GridItem colSpan={2} display="flex" gap={5} alignItems="center">
						<Text fontSize="md">백준</Text>
						<Button
							onClick={handleToggle(setIsSolveB)}
							{...buttonStyle(isSolveB)}
						>
							{isSolveB ? "Yes" : "No"}
						</Button>
					</GridItem>
					<GridItem colSpan={2} display="flex" gap={5} alignItems="center">
						<Text fontSize="md">프로그래머스</Text>
						<Button
							onClick={handleToggle(setIsSolveP)}
							{...buttonStyle(isSolveP)}
						>
							{isSolveP ? "Yes" : "No"}
						</Button>
					</GridItem>
					<GridItem colSpan={5} display="flex" justifyContent="flex-end">
						<Button variant="solid" bg="deepBeige">
							{" "}
							등록{" "}
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
								참석
							</Th>
							<Th textAlign="center" fontWeight="semibold" fontSize="md">
								백준 풀이
							</Th>
							<Th textAlign="center" fontWeight="semibold" fontSize="md">
								프로그래머스 풀이
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							{Object.entries(totalDummy).map(([key, value]) => (
								<Td key={key} textAlign="center">
									<Text fontWeight="normal" size="sm">
										{value}
									</Text>
								</Td>
							))}
						</Tr>
					</Tbody>
				</Table>
				<Box border="1px" borderColor="beige" borderRadius={15} p={3} mt={6}>
					<Table>
						<Thead>
							<Tr>
								<Th textAlign="center" fontWeight="semibold" fontSize="md">
									이름
								</Th>
								<Th textAlign="center" fontWeight="semibold" fontSize="md">
									참석
								</Th>
								<Th textAlign="center" fontWeight="semibold" fontSize="md">
									백준
								</Th>
								<Th textAlign="center" fontWeight="semibold" fontSize="md">
									프로그래머스
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{personDummy.map((value, index) => (
								<Tr key={index}>
									{["name", "attend", "backjoon", "programmers"].map(field => (
										<Td key={field} textAlign="center">
											{value[field as keyof typeof value]}
										</Td>
									))}
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
			</Box>
		</Box>
	);
};

export default LeftOverview;
