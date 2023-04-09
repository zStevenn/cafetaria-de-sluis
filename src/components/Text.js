export const Title = ({ text, className = "" }) => {
	return (
		<h1 className={`text-3xl font-semibold text-center ${className}`}>
			{text}
		</h1>
	)
}

export const Subtitle = ({ text, className = "" }) => {
	return <h2 className={`text-2xl font-semibold ${className}`}>{text}</h2>
}

export const Paragraph = ({ text, className = "" }) => {
	return <p className={`text-base font-normal ${className}`}>{text}</p>
}
