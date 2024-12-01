import httpClient from "./DefaultAPI";

export enum LoginType {
	USER = "user",
	GUEST = "guest"
}

export interface LoginRequest {
	user_id: string;
	password: string;
	type: LoginType;
}

export interface LoginResponse {
	access_token: string;
	id: number;
	refresh_token: string;
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
	try {
		const response = await httpClient.post<LoginResponse>("/login", data);
		return response.data;
	} catch (error) {
		// 에러 처리: 필요시 커스텀 로직 추가
		console.error("Login API Error:", error);
		throw error;
	}
};
