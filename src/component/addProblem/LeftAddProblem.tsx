import React, { useEffect } from "react";
import {
	Box,
	Grid,
	GridItem,
	HStack,
	Input,
	Radio,
	RadioGroup,
	Text,
	Select,
	FormLabel,
	Button,
	Flex
} from "@chakra-ui/react";
import CalculatingDate from "../../config/CalculatingDate";
import levelInfo from "../../config/staic_data.json";

interface LevelType {
	level: {
		backjoon: string[];
		programmers: string[];
	};
}

interface Problem {
	platform: string;
	name: string;
	link: string;
	level: string;
}

const LeftAddProblem: React.FC = () => {
	const { current } = CalculatingDate();

	const textStyle = () => ({
		fontWeight: "semibold",
		fontSize: "md",
		alignContent: "center",
		marginBottom: 3
	});

	const btnStyle = () => ({
		variant: "solid",
		bg: "deepBeige",
		_hover: { bg: "beige" }
	});

	const [platform, setPlatform] =
		React.useState<keyof LevelType["level"]>("backjoon");
	const [name, setName] = React.useState<string>("");
	const [link, setLink] = React.useState<string>("");
	const [level, setLevel] = React.useState<string>("");

	const [options, setOptions] = React.useState<string[]>([]);
	useEffect(() => {
		setOptions(levelInfo.level[platform]);
	}, [platform]);

	const [problems, setProblems] = React.useState<Problem[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newProblem: Problem = { platform, name, link, level };
		setProblems([...problems, newProblem]);

		setPlatform("backjoon"); // 기본 플랫폼으로 설정
		setName(""); // 문제명 초기화
		setLink(""); // 링크 초기화
		setLevel(""); // 레벨 초기화
	};

	return (
		<Box m={5}>
			<Box>
				<Text fontSize="lg" fontWeight="semibold">
					{current} 스터디 문제 등록
				</Text>
				<form onSubmit={handleSubmit}>
					<Grid
						templateColumns="repeat(4, 1fr)"
						templateRows="repeat(7, 1fr)"
						p={5}
						gap={3}
					>
						<GridItem colSpan={2} rowSpan={2}>
							<FormLabel {...textStyle()}>플랫폼</FormLabel>
							<RadioGroup
								defaultValue="backjoon"
								value={platform}
								onChange={value =>
									setPlatform(value as keyof LevelType["level"])
								}
							>
								<HStack justifyContent="space-around">
									<Radio
										value="backjoon"
										_checked={{
											bg: "deepBeige",
											borderColor: "beige"
										}}
									>
										백준
									</Radio>
									<Radio
										value="programmers"
										_checked={{
											bg: "navy",
											borderColor: "gray"
										}}
									>
										프로그래머스
									</Radio>
								</HStack>
							</RadioGroup>
						</GridItem>
						<GridItem colSpan={2} rowSpan={2} gap={3}>
							<FormLabel {...textStyle()}>문제명</FormLabel>
							<Input
								type="text"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</GridItem>

						<GridItem colSpan={4} rowSpan={2}>
							<Text {...textStyle()}>링크</Text>
							<Input
								type="text"
								value={link}
								onChange={e => setLink(e.target.value)}
							></Input>
						</GridItem>

						<GridItem colSpan={4} rowSpan={2}>
							<Text {...textStyle()}>레벨</Text>
							<Select
								placeholder="레벨을 선택하세요."
								value={level || ""}
								onChange={e => setLevel(e.target.value)}
							>
								{options.map((option, index) => (
									<option key={index} value={option}>
										{option}
									</option>
								))}
							</Select>
						</GridItem>
						<GridItem colSpan={4} display="flex" justifyContent="flex-end">
							<Button {...btnStyle()} type="submit">
								{" "}
								Submit{" "}
							</Button>
						</GridItem>
					</Grid>
				</form>
			</Box>
			<Box mt={5} border="1px" borderColor="beige" borderRadius={15} p={6}>
				<Flex gap={9}>
					<Input type="text" placeholder="문제 풀이 여부를 검색하세요" />
					<Button {...btnStyle()}> 검색 </Button>
				</Flex>
			</Box>
		</Box>
	);
};

export default LeftAddProblem;
