function Map(props) {
	return (
		<iframe
			className={props.className}
			src="https://maps.google.com/maps?q=de%20sluis%2025&t=&z=15&ie=UTF8&iwloc=&output=embed"
			frameBorder="0"
			style={{ border: 0 }}
			allowFullscreen="false"
			aria-hidden="false"
			tabIndex="0"
			title="Google Maps"
		></iframe>
	);
}

export default Map;
