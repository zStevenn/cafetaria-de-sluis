import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export function FAQ({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="px-2 py-4 bg-primary text-neutral-100 rounded-lg mb-4 divide-y divide-neutral-100">
			<button onClick={() => setIsOpen(!isOpen)}>
				<p className="font-semibold text-base text-start flex flex-row flex-nowrap">
					{question} <MdKeyboardArrowDown className="text-3xl fill-neutral-100" />
				</p>
			</button>
			{isOpen && <p className>{answer}</p>}
		</div>
	);
}
