import { createContext, useState, ReactNode, useEffect } from "react";

interface UserContextProps {
	nickName: string;
	setNickName: (name: string) => void;
	isLoggedIn: boolean;
	setIsLoggedIn: (status: boolean) => void;
	accessToken: string;
	setAccessToken: (token: string) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
	undefined
);

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const storedUserNickName = localStorage.getItem("userName");
	const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

	const [nickName, setNickName] = useState(storedUserNickName || "");
	const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn === "true");
	const [accessToken, setAccessToken] = useState("");

	useEffect(() => {
		if (nickName) {
			localStorage.setItem("userName", nickName);
		}
	}, [nickName]);

	useEffect(() => {
		localStorage.setItem("isLoggedIn", String(isLoggedIn));
	}, [isLoggedIn]);

	return (
		<UserContext.Provider
			value={{
				nickName,
				setNickName,
				isLoggedIn,
				setIsLoggedIn,
				accessToken,
				setAccessToken
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
