import "./Article.css";

function ContentProduct(props) {
  return (
    <div className="article__card">
      <h3 className="article__title">Titel {props.id}</h3>
      <img className="article__img" src={props.id} alt={props.id}/>
      <p className="article__description">
      <span className="article__price">€ 5,99</span>
        Korte omschrijving
      </p>
    </div>
  );
}

function DisplayArticles(props) {
  const generateBlocks = props.block.map((array) =>
    <ContentProduct key={array} id={array}/>
  );
  return (
    <div className="article">
      {generateBlocks}
    </div>
  );
}

const blockArray = [1,2,3,4,5,6,7,8,9];

function Article() {
  return (
    <DisplayArticles block={blockArray} />
  );
}

export default Article;
