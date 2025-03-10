import React, { useContext } from "react";
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
import dummyData from "../../data/dummy_data.json";
import { UserContext } from "../../context/UserContext";

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

const mappingPlatformName: Record<string, string> = {
	boj: "백준",
	programmers: "프로그래머스",
	leetCode: "릿코드"
};

const LeftOverview: React.FC = () => {
	const userContext = useContext(UserContext)!;
	const userName: String = userContext.nickName;

	const [isAttend, setIsAttend] = React.useState(false);
	const [isSolved, setIsSolved] = React.useState<Record<string, boolean>>({
		boj: false,
		programmers: false,
		leetCode: false
	});

	const handleAttend =
		(setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
			setter(prev => !prev);
		};

	const handleSolved = (platform: string) => {
		setIsSolved(prev => ({
			...prev,
			[platform]: !prev[platform]
		}));
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
					templateColumns="repeat(6, 1fr)"
					templateRows="1fr 1fr"
					p={5}
					gap={3}
				>
					<GridItem alignContent="center">
						<Text fontWeight="semibold" fontSize="md">
							참석
						</Text>
					</GridItem>
					<GridItem colSpan={5} alignContent="center">
						<Button
							onClick={handleAttend(setIsAttend)}
							{...buttonStyle(isAttend)}
						>
							{" "}
							{isAttend ? "Yes" : "No"}
						</Button>
					</GridItem>
					<GridItem colSpan={6}>
						<Text fontWeight="semibold" fontSize="md" alignContent="center">
							풀이여부
						</Text>
					</GridItem>

					{Object.keys(isSolved).map(platform => (
						<GridItem
							colSpan={2}
							display="flex"
							alignItems="center"
							justifyContent="center"
							gap={2}
						>
							<Text fontSize="md">{mappingPlatformName[platform]}</Text>
							<Button
								onClick={() => handleSolved(platform)}
								{...buttonStyle(isSolved[platform])}
							>
								{isSolved[platform] ? "Yes" : "No"}
							</Button>
						</GridItem>
					))}

					<GridItem colSpan={6} display="flex" justifyContent="flex-end">
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
