import { createContext, useState, ReactNode, useEffect } from "react";

interface UserContextProps {
	userName: string;
	setUserName: (name: string) => void;
	isLoggedIn: boolean;
	setIsLoggedIn: (status: boolean) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
	undefined
);

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const storedUserName = localStorage.getItem("userName");
	const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

	const [userName, setUserName] = useState(storedUserName || "");
	const [isLoggedIn, setIsLoggedIn] = useState(
		storedIsLoggedIn === "true" ? true : false
	);

	useEffect(() => {
		if (userName) {
			localStorage.setItem("userName", userName);
		}
	}, [userName]);

	useEffect(() => {
		localStorage.setItem("isLoggedIn", String(isLoggedIn));
	}, [isLoggedIn]);

	return (
		<UserContext.Provider
			value={{ userName, setUserName, isLoggedIn, setIsLoggedIn }}
		>
			{children}
		</UserContext.Provider>
	);
};
