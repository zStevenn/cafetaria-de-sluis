import "./ContentReview.css";

const data = [
	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
	{ orderName: "Steven", orderStars: "5", orderDescription: "Amazing!" },
];

function DisplayCustomerReview(props) {
	const customerData = props.customerData;
	const customerCards = customerData.map((customer) => (
		<div className="content__review_card">
			<h3>{customer.orderName}</h3>
			<p>{customer.orderStars}</p>
			<p>{customer.orderDescription}</p>
		</div>
	));
	return { customerCards };
}

function ContentReview() {
	return (
		<div className="content__review">
			<div className="content__review_header">
				<h2>Review</h2>
			</div>
			<div className="content__review_order">
				<DisplayCustomerReview customerData={data} />
			</div>
		</div>
	);
}

export default ContentReview;