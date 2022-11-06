import "./ContentReview.css";

const data = [
	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
];

function DisplayCustomerReview() {
	return (
		<div className="content__review__card">
			<h3>Name:Steven</h3>
			<p>Stars:5</p>
			<p>Descr:Amazing!</p>
			<p>Date: 6-11-2022</p>
		</div>
	);
}

function ContentReview() {
	return (
		<div className="content__review">
			<div className="content__review__header">
				<h2>Reviews</h2>
			</div>
			<div className="content__review__order">
				<DisplayCustomerReview />
        <DisplayCustomerReview />
        <DisplayCustomerReview />
        <DisplayCustomerReview />
			</div>
		</div>
	);
}

export default ContentReview;
