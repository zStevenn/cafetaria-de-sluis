function Map(props) {
	return (
		<iframe
			className={props.className}
			src="https://maps.google.com/maps?q=de%20sluis%2025&t=&z=15&ie=UTF8&iwloc=&output=embed"
			frameborder="0"
			style={{ border: 0 }}
			allowfullscreen="false"
			aria-hidden="false"
			tabindex="0"
			title="Google Maps"
		></iframe>
	);
}

export default Map;
