import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./component/Router";
import Theme from "./config/Theme";
import { UserProvider } from "./component/context/UserContext";

function App() {
	return (
		<ChakraProvider theme={Theme}>
			<UserProvider>
				<Router />
			</UserProvider>
		</ChakraProvider>
	);
}

export default App;
