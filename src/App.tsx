import React from "react";
import colors from "./config/color.json";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<div>
				<h1 style={{ color: colors.navy }}> Test </h1>
			</div>
		</ChakraProvider>
	);
}

export default App;
