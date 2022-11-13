import "./ProductHighlights.css";

function HighlightItem() {
	return (
		<div className="p-highlights__item">
			<div className="p-highlights__item-img">
				<img className="img-fluid" src="https://via.placeholder.com/125" alt="Product image" />
			</div>
			<div className="p-highlights__item-info">
				<h3 className="p-highlights__item-title">Productnaam</h3>
				<p className="p-highlights__item-price">
					<span className="p-highlights__item-price--currency">€</span>
					<span className="p-highlights__item-price--amount">12</span>
				</p>
			</div>
		</div>
	);
}

function ProductHighlights() {
	return (
		<div className="p-highlights__container">
			<div className="p-highlights__wrapper">
				<div className="p-highlights__intro">
					<h2 className="subtitle">Vaak besteld</h2>
					<h1 className="title">Populaire Gerechten</h1>
				</div>
				<div className="p-highlights__items">
          <HighlightItem />
          <HighlightItem />
        </div>
			</div>
		</div>
	);
}

export default ProductHighlights;

<div className="populair-dishes">
	<h2>Populair dishes</h2>
	<div className="populair-dishes__container">
		<div className="populair-dishes__item">
			<img src="https://via.placeholder.com/150" alt="dish" />
			<h3>Populair dish</h3>
			<p>Populair dish description</p>
		</div>
		<div className="populair-dishes__item">
			<img src="https://via.placeholder.com/150" alt="dish" />
			<h3>Populair dish</h3>
			<p>Populair dish description</p>
		</div>
		<div className="populair-dishes__item">
			<img src="https://via.placeholder.com/150" alt="dish" />
			<h3>Populair dish</h3>
			<p>Populair dish description</p>
		</div>
	</div>
</div>;
