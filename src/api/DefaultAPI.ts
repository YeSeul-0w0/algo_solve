import axios from "axios";

const DefaultAPI = axios.create({
	baseURL: "http://localhost:8080", // 서버의 기본 URL
	timeout: 5000,
	headers: {
		"Content-Type": "application/json"
	}
});

export default DefaultAPI;
