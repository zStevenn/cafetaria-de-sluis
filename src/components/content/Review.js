import "./Review.css";
import React, { Component } from "react";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

function ReviewItem() {
  return (
    <div className="review__item">
      <div className="item__title">
        <h3>Name</h3>
      </div>
      <div className="item__stars">
        <MdStar className="material-icons md-24 md-dark"/>
        <MdStar className="material-icons md-24 md-dark"/>
        <MdStar className="material-icons md-24 md-dark"/>
        <MdStarHalf className="material-icons md-24 md-dark"/>
        <MdStarOutline className="material-icons md-24 md-dark"/>
      </div>
      <div className="item__description">
        Description but a slightly longer version
      </div>
    </div>
  );
}

class Review extends Component {
	render() {
		return (
			<div className="review__container">
        <div className="review__wrapper">
          <div className="review__title">
            <h1 className="title">
              Reviews
            </h1>
          </div>
          <div className="review__items">
            <ReviewItem />
            <ReviewItem />
          </div>
        </div>
      </div>
		);
	}
}

export default Review;
