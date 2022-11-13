import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero__container">
      <div className="hero__text">
        <h2 className="subtitle">Snel én makkelijk!</h2>
        <h1 className="title">Bestel nu via onze eigen webshop</h1>
        <a href="https://www.google.com" className="btn btn__hero">
          Bestellen
        </a>
      </div>
      <div className="hero__image">
        <img src="/images/hero__image.svg" alt="Hero image" />
      </div>
    </div>
  );
}

export default HeroSection;
