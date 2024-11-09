import { createContext, useState, ReactNode } from "react";

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
	const [userName, setUserName] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<UserContext.Provider
			value={{ userName, setUserName, isLoggedIn, setIsLoggedIn }}
		>
			{children}
		</UserContext.Provider>
	);
};
