import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="px-2 py-4 bg-white text-primary rounded-lg mb-4 divide-y divide-primary">
      <button className="hover:scale-110 transition-all" onClick={() => setIsOpen(!isOpen)}>
        <h6 className="font-semibold text-lg text-start">{question} <MdKeyboardArrowDown className="text-3xl fill-primary" /></h6>
      </button>
      {isOpen && <p className>{answer}</p>}
    </div>
  );
}
