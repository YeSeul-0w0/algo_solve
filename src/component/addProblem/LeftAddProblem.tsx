import React from "react";
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
	Button
} from "@chakra-ui/react";
import CalculatingDate from "../../utils/CalculatingDate";
import platformInfo from "../../data/staic_data.json";

interface Problem {
	platform: string;
	problemId: string;
	problemName: string;
	problemLink: string;
	mainLevel: string;
	subLevel?: string | null;
}

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

const LeftAddProblem: React.FC = () => {
	const { current } = CalculatingDate();

	const [platform, setPlatform] =
		React.useState<keyof (typeof platformInfo)["platformInfo"]>("boj");
	const [problemId, setProblemId] = React.useState<string>("");
	const [problemName, setProblemName] = React.useState<string>("");
	const [problemLink, setProblemLink] = React.useState<string>("");
	const [mainLevel, setMainLevel] = React.useState<string>("");
	const [subLevel, setSubLevel] = React.useState<string | null>(null);

	const mainLevelOptions = platformInfo.platformInfo[platform].mainLevel;
	const subLevelOptions =
		platform === "boj" ? platformInfo.platformInfo.boj.subLevel : [];

	const [problems, setProblems] = React.useState<Problem[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newProblem: Problem = {
			platform,
			problemName: problemName,
			problemId: problemId,
			problemLink: problemLink,
			mainLevel: mainLevel,
			subLevel: subLevel
		};

		setProblems([...problems, newProblem]);
		console.log(problems);
		setPlatform("boj");
		setProblemName("");
		setProblemId("");
		setProblemLink("");
		setMainLevel("");
		setSubLevel(null);
	};
	return (
		<Box m={5}>
			<Box>
				<Text fontSize="lg" fontWeight="semibold">
					{current} 스터디 문제 등록
				</Text>
				<form onSubmit={handleSubmit}>
					<Grid
						templateColumns="repeat(3, 1fr)"
						templateRows="repeat(10, 1fr)"
						p={5}
						gap={3}
					>
						<GridItem colSpan={3} rowSpan={2}>
							<FormLabel {...textStyle()}>플랫폼</FormLabel>
							<RadioGroup
								defaultValue="boj"
								value={platform}
								onChange={value =>
									setPlatform(
										value as keyof (typeof platformInfo)["platformInfo"]
									)
								}
							>
								<HStack justifyContent="space-around">
									{Object.entries(platformInfo.platformInfo).map(
										([key, value]) => (
											<Radio
												key={key}
												value={key}
												_checked={{
													bg: value.backgroundColor,
													borderColor: value.borderColor
												}}
											>
												{key === "boj"
													? "백준"
													: key === "programmers"
														? "프로그래머스"
														: "릿코드"}
											</Radio>
										)
									)}
								</HStack>
							</RadioGroup>
						</GridItem>
						<GridItem colSpan={3} rowSpan={2} gap={3}>
							<FormLabel {...textStyle()}>문제명</FormLabel>
							<Input
								type="text"
								value={problemName}
								onChange={e => setProblemName(e.target.value)}
							/>
						</GridItem>

						<GridItem colSpan={3} rowSpan={2} gap={3}>
							<FormLabel {...textStyle()}>문제번호</FormLabel>
							<Input
								type="text"
								value={problemId}
								onChange={e => setProblemId(e.target.value)}
							/>
						</GridItem>

						<GridItem colSpan={4} rowSpan={2}>
							<Text {...textStyle()}>링크</Text>
							<Input
								type="text"
								value={problemLink}
								onChange={e => setProblemLink(e.target.value)}
							></Input>
						</GridItem>

						{platform === "boj" ? (
							<>
								<GridItem colSpan={2} rowSpan={2}>
									<Text {...textStyle()}>난이도 선택</Text>
									<Select
										placeholder="난이도 선택"
										value={mainLevel}
										onChange={e => setMainLevel(e.target.value)}
									>
										{mainLevelOptions.map((option, index) => (
											<option key={index} value={option}>
												{option}
											</option>
										))}
									</Select>
								</GridItem>

								<GridItem colSpan={1} rowSpan={2}>
									<Text {...textStyle()}>숫자 선택</Text>
									<Select
										placeholder="숫자 선택"
										value={subLevel || ""}
										onChange={e => setSubLevel(e.target.value)}
									>
										{subLevelOptions.map((option, index) => (
											<option key={index} value={option}>
												{option}
											</option>
										))}
									</Select>
								</GridItem>
							</>
						) : (
							<GridItem colSpan={3} rowSpan={2}>
								<Text {...textStyle()}>레벨</Text>
								<Select
									placeholder="레벨 선택"
									value={mainLevel}
									onChange={e => setMainLevel(e.target.value)}
								>
									{mainLevelOptions.map((option, index) => (
										<option key={index} value={option}>
											{option}
										</option>
									))}
								</Select>
							</GridItem>
						)}
						<GridItem colSpan={4} display="flex" justifyContent="flex-end">
							<Button {...btnStyle()} type="submit">
								{" "}
								Submit{" "}
							</Button>
						</GridItem>
					</Grid>
				</form>
			</Box>
			{/*<Box mt={5} border="1px" borderColor="beige" borderRadius={15} p={6}>*/}
			{/*	<Flex gap={9}>*/}
			{/*		<Input type="text" placeholder="문제 풀이 여부를 검색하세요" />*/}
			{/*		<Button {...btnStyle()}> 검색 </Button>*/}
			{/*	</Flex>*/}
			{/*</Box>*/}
		</Box>
	);
};

export default LeftAddProblem;
