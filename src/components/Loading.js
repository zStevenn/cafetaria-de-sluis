import { FaSpinner } from "react-icons/fa";

export default function Loading() {
	return (
		<div className="h-[60vh] w-screen flex flex-col justify-center items-center bg-primary">
			<FaSpinner className="animate-spin text-5xl text-white" />
			<p className="text-white">Een momentje a.u.b...</p>
		</div>
	);
}
