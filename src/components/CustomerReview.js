import { BsFillArrowLeftCircleFill as ArrowLeft, BsFillArrowRightCircleFill as ArrowRight } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { Title } from "./Text";

function ReviewCard(props) {
	const stars = [];
	for (let i = 0; i < props.rating; i++) {
		stars.push(<BsStarFill/>);
	}
	return (
		<div className="flex flex-col flex-nowrap justify-center items-center bg-white rounded-xl px-6 py-3 m-2 md:px-10 md:py-5">
			<div className="text-primary text-base font-semibold md:text-lg font-base md:font-lg truncate">{props.name}</div>
			<div className="flex flex-row flex-nowrap p-2 text-yellow-500">{stars}</div>
		</div>
	);
}

export default function ReviewList() {
	return (
		<div className="flex flex-col justify-center items-center bg-primary">
			<Title text={"Reviews"} className="my-10" />
			<div className="flex flex-row flex-nowrap justify-center items-center mb-10">
				<ArrowLeft className="text-3xl fill-white" />
				<ReviewCard name={"Steven Li"} rating={4} />
				<ReviewCard name={"Ai Hua Sun"} rating={4} />
				<ArrowRight className="text-3xl fill-white" />
			</div>
		</div>
	);
}