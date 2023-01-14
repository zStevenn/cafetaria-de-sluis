import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export function FAQ({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="px-2 py-4 bg-primary text-white rounded-lg mb-4 divide-y divide-white">
			<button onClick={() => setIsOpen(!isOpen)}>
				<p className="font-semibold text-base text-start flex flex-row flex-nowrap">
					{question} <MdKeyboardArrowDown className="text-3xl fill-white" />
				</p>
			</button>
			{isOpen && <p className>{answer}</p>}
		</div>
	);
}
