import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__image prevent-select">
        <img src={`/images/ContentOrder.png`} alt="Cafetaria de Sluis" />
      </div>
      <div className="banner__text">
        <h1 className="banner__text-title">Bestel je eten online</h1>
        <p className="banner__text-description">
          Ga nu naar onze webshop en bestel je eten online.
          Je kunt je bestelling ophalen bij de kassa of laten bezorgen.
        </p>
        <a className="banner__button prevent-select" href="https://www.e-food.nl/driebergen/cafeteria-de-sluis" target="_blank" rel="noreferrer">
          <h2>Bestel online</h2>
        </a>
      </div>
    </div>
  );
}

export default Banner;
