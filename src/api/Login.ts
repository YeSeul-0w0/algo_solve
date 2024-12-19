import DefaultAPI from "./DefaultAPI";
import axios from "axios";

// 사용 여부 고민...
// export enum LoginType {
// 	USER = "user",
// 	GUEST = "guest"
// }

export interface LoginRequest {
  userId: string;
	password: string;
}

export interface LoginResponse {
	refresh_token: string;
}

// test1
// testPassword
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
	try {
		const response = await DefaultAPI.post<LoginResponse>("/auth/login", data, {withCredentials: true,});
    console.log(response);
		return response.data;
	} catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
    } else {
      console.error("General Error:", error);
    }
    throw error;
    }
};
