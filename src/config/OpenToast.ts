import { createStandaloneToast } from "@chakra-ui/react";

// Chakra UI Toast 인자 타입 정의
interface ToastOptions {
	message: string;
	status: "success" | "error" | "warning" | "info";
}

const { toast } = createStandaloneToast();

/**
 * @param options 메시지와 상태값을 포함한 객체
 */

const OpenToast = ({ message, status }: ToastOptions) => {
	toast({
		title: message,
		status: status,
		position: "bottom",
		duration: 3000,
		isClosable: true
	});
};

export default OpenToast;
