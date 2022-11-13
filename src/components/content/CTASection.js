import "./CTASection.css";

function CTASection() {
	return (
		<div className="cta__container">
			<div className="green-border" />
			<div className="cta__wrapper">
				<div className="cta__text prevent-select">
					<h1 className="cta__title">Collega's gezocht!</h1>
				</div>
					<a href="#vacatures" className="btn btn__cta">
						Bekijk vacatures
					</a>
			</div>
			<div className="green-border" />
		</div>
	);
}

export default CTASection;
