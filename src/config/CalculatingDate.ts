const CalculatingDate = (): {
	current: string;
	previous: string;
} => {
	const today = new Date();
	const dayOfWeek = today.getDay();

	const currentWed = new Date(today);
	currentWed.setDate(today.getDate() + ((3 - dayOfWeek + 7) % 7));

	const nextWed = new Date(today);
	nextWed.setDate(currentWed.getDate() - 7);

	return {
		current: currentWed.toLocaleDateString(),
		previous: nextWed.toLocaleDateString()
	};
};

export default CalculatingDate;
