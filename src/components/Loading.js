import { FaSpinner } from "react-icons/fa";

export default function Loading() {
	return (
		<div className="h-[60vh] w-screen flex flex-col justify-center items-center">
			<FaSpinner className="animate-spin text-5xl text-gray-500" />
			<p className="text-gray-500">Loading...</p>
		</div>
	);
}
