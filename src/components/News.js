export function NewsCard(props) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2">
			<h1 className="text-xl font-bold">{props.title}</h1>
			<h3 className="text-base mb-2 text-slate-700">{props.date}</h3>
			<p className="overflow-hidden min-h-fit">
				{props.text}
			</p>
		</div>
	);
}
