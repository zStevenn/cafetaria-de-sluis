import "./Products.css";

function Product(props) {
  return (
    <div className="product__card">
      <h3 className="product__title">Titel {props.id}</h3>
      <img className="product__img" src={props.id} alt={props.id}/>
      <p className="product__description">
      <span className="product__price">€ 5,99</span>
        Korte omschrijving
      </p>
    </div>
  );
}

function DisplayProducts(props) {
  const generateProducts = props.products.map((array) =>
    <Product key={array} id={array}/>
  );
  return (
    <div className="product">
      {generateProducts}
    </div>
  );
}

const products = [1,2,3,4,5,6,7,8,9];

function Products() {
  return (
    <DisplayProducts products={products} />
  );
}

export default Products;
