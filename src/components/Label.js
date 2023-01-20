const Label = ({ label, name }) => {
	return (
		<label
			className="block text-white text-sm font-bold mb-2 capitalize"
			htmlFor={name}
		>
			{label}
		</label>
	)
}

export default Label
