// Default card component
export function Card(props) {
  return (
    <div className="flex flex-col bg-white text-primary px-5 py-10 items-center rounded-lg">
      <h3 className="mb-2 font-semibold text-lg">{props.title}</h3>
      <img className="mb-2 rounded-lg object-cover min-w-[8rem] min-h-[8rem] w-32 h-32 border-primary border shadow-sm shadow"
        src={props.imgSrc}
        alt={props.imgTitle}
      />
    </div>
  );
}