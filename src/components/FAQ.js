import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export function FAQ({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="px-2 py-4 bg-white text-primary rounded-lg mb-4 divide-y divide-primary">
			<button onClick={() => setIsOpen(!isOpen)}>
				<p className="font-semibold text-base text-start flex flex-row flex-nowrap">
					{question} <MdKeyboardArrowDown className="text-3xl fill-primary" />
				</p>
			</button>
			{isOpen && <p className>{answer}</p>}
		</div>
	);
}
