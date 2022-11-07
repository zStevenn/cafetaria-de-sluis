import "./ContentOrder.css";

function ContentOrder() {
  return (
    <div className="order">
      <div className="order__image prevent-select">
        <img src={`/images/ContentOrder.png`} alt="Cafetaria de Sluis" />
      </div>
      <div className="order__text">
        <h1 className="order__text-title">Bestel je eten online</h1>
        <p className="order__text-description">
          Ga nu naar onze webshop en bestel je eten online.
          Je kunt je bestelling ophalen bij de kassa of laten bezorgen.
        </p>
        <a className="order__button prevent-select" href="https://www.e-food.nl/driebergen/cafeteria-de-sluis" target="_blank" rel="noreferrer">
          <h2>Bestel online</h2>
        </a>
      </div>
    </div>
  );
}

export default ContentOrder;
