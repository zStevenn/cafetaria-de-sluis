export function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="px-2 py-4 bg-white text-primary rounded-lg mb-4 divide-y divide-primary">
      <button onClick={() => setIsOpen(!isOpen)}>
        <h6 className="font-semibold text-lg text-start">{question} IconDown</h6>
      </button>
      {isOpen && <p className>{answer}</p>}
    </div>
  );
}
