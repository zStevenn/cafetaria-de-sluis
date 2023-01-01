export function NewsCard(props) {
	return (
		<div className="bg-white p-6 mb-6 rounded-lg shadow-lg w-96 h-80">
			<h1 className="text-xl font-bold">{props.title}</h1>
			<h3 className="text-base mb-2 text-slate-700">{props.date}</h3>
			<p className="text-clip">
				{props.text}
			</p>
		</div>
	);
}
