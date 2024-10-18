import { createContext, useState, ReactNode } from "react";

interface UserContextProps {
	userName: string;
	setUserName: (name: string) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
	undefined
);

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [userName, setUserName] = useState("");

	return (
		<UserContext.Provider value={{ userName, setUserName }}>
			{children}
		</UserContext.Provider>
	);
};
