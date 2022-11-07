import "./ContentReview.css";

// const data = [
// 	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
// 	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
// 	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
// ];

function DisplayCustomerReview() {
	return (
		<div className="review__card">
			<h3 className="review__card-title">Name:Steven</h3>
			<p className="review__card-stars">Stars:5</p>
			<p className="review__card-description">Descr:Amazing!</p>
			<p>Date: 6-11-2022</p>
		</div>
	);
}

function ContentReview() {
	return (
		<div className="review">
			<div className="review__header">
				<h2>Reviews</h2>
			</div>
			<div className="review__order">
				<DisplayCustomerReview />
        <DisplayCustomerReview />
        <DisplayCustomerReview />
        <DisplayCustomerReview />
			</div>
		</div>
	);
}

export default ContentReview;
