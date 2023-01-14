// Default card component
export function Card(props) {
  return (
    <div className="flex flex-col bg-primary text-white px-3 py-8 items-center rounded-lg shadow-lg shadow-primary transition-all hover:scale-110">
      <h3 className="mb-2 font-semibold text-md">{props.title}</h3>
      <img className="mb-2 rounded-lg object-cover w-40 h-40 border-white border"
        src={props.imgSrc}
        alt={props.imgTitle}
      />
    </div>
  );
}