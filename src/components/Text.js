export const Title = ({ text, className = "" }) => {
	return <h1 className={`text-3xl font-semibold text-white text-center ${className}`}>{text}</h1>;
};

export const TitleOutline = ({ text, className = "" }) => {
	return (
		<h1 className="text-3xl font-semibold text-white text-center relative hover:scale-110 hover:transition-all">
			<span className="absolute inset-0 text-white">{text}</span>
			<span className="relative text-primary">{text}</span>
		</h1>
	);
};

export const Subtitle = ({ text, className = "" }) => {
	return <h2 className={`text-2xl font-semibold text-white ${className}`}>{text}</h2>;
};

export const Paragraph = ({ text, className = "" }) => {
	return <p className={`text-base font-normal text-white ${className}`}>{text}</p>;
};
