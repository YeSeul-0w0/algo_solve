import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
	colors: {
		lightBeige: "#F8F0E5",
		deepBeige: "#DAC0A3",
		beige: "#EADBC8",
		navy: "#0F2C59",
		deepBlue: "#0F2C96",
		black: "#000000",
		lightGray: "#9A9A9A",
		brown: "#AD8B73",
		yellow: "#F7C566",
		orange: "#DC6B19"
	},
	fonts: {
		body: `'Outfit', sans-serif` // 본문에 사용할 폰트
	}
});

export default Theme;
