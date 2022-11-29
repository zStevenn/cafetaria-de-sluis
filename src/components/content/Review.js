import React, { Component } from "react";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

function ReviewItem() {
  return (
    <div className="flex flex-col justify-center align-center p-4 m-2">
      <h2 className="text-lg text-center text-black m-2">Titel</h2>
      <div className="flex flex-row m-2">
        <MdStar className="material-icons md-24 md-dark"/>
        <MdStar className="material-icons md-24 md-dark"/>
        <MdStar className="material-icons md-24 md-dark"/>
        <MdStarHalf className="material-icons md-24 md-dark"/>
        <MdStarOutline className="material-icons md-24 md-dark"/>
      </div>
      <div className="h-40 w-64 m-2">
        <p className="text-black">Lorem ipsum blablablaweijpaweirjjap jwperij pwaeij prijwae r we</p>
      </div>
    </div>
  );
}

class Review extends Component {
	render() {
		return (
			<>
        <div className="flex justify-center content-center m-2">
          <h1 className="text-3xl text-center">Reviews</h1>
        </div>
        <div className="flex justify-center content-center">
          <ReviewItem />
          <ReviewItem />
        </div>
      </>
		);
	}
}

export default Review;
