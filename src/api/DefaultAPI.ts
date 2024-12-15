import axios from "axios";

const DefaultAPI = axios.create({
	baseURL: "http://localhost:8080", // 서버의 기본 URL
	timeout: 5000,
	headers: {
		"Content-Type": "application/json"
	}
});

// Token 안넣음
// DefaultAPI.interceptors.request.use(config => {
// 	const token = localStorage.getItem("token");
// 	if (token) {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}
// 	return config;
// });

export default DefaultAPI;
