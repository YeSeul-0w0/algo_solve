import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./component/Router";
import Theme from "./config/Theme";

function App() {
	return (
		<ChakraProvider theme={Theme}>
			<Router />
		</ChakraProvider>
	);
}

export default App;
