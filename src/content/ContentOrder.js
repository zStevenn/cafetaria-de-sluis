import "./ContentOrder.css";

function ContentOrder() {
  return (
    <div className="content__order">
      <div className="content__order__image prevent-select">
        <img src={`/images/ContentOrder.png`} alt="Cafetaria de Sluis" />
      </div>
      <div className="content__order__text">
        <h1>Bestel je eten online</h1>
        <p>
          Ga nu naar onze webshop en bestel je eten online.
          Je kunt je bestelling ophalen bij de kassa of laten bezorgen.
        </p>
        <a className="content__order__button prevent-select" href="https://www.e-food.nl/driebergen/cafeteria-de-sluis" target="_blank" rel="noreferrer">
          <h2>Bestel online</h2>
        </a>
      </div>
    </div>
  );
}

export default ContentOrder;