import "./Newsarticle.css";
import React, { Component } from "react";

class Newsarticle extends Component {
  render() {
    return (
      <div className="news">
        <div className="news__block">
          <div className="news__block--left">
            <a className="news__img" href="#news">
              <img class="img--flex" src="https://loremflickr.com/400/250/" alt="Nieuwe vloer!" title="Nieuwe vloer!"/>
            </a>
          </div>
          <div className="news__block--right">
            <div className="news__card">
              <div className="news__title">This is the title</div>
              <div className="news__date">8-11-2022</div>
              <div className="news__description">This is a description of the article.</div>
              <div className="news__btn">
                <a className="btn btn__full-width btn__news" href="#news" >
                  Button article!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsarticle;
