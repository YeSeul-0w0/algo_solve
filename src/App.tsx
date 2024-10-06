import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./component/Router";
import ThemeColor from "./config/ThemeColor";

function App() {
	return (
		<ChakraProvider theme={ThemeColor}>
			<Router />
		</ChakraProvider>
	);
}

export default App;
