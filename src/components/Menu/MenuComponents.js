export function MenuSubheader(props) {
	return <p className="text-lg font-semibold pb-2">{props.name}</p>;
}

export function MenuItem(props) {
	return (
		<div className="flex flex-row justify-start py-1 whitespace-nowrap w-full sm:w-96">
			{/* Item name */}
			<p className="w-2/3">{props.name}</p>
			{/* Price */}
			<p className="w-1/3">&euro; {props.price}</p>
		</div>
	);
}

export function AllergyMenu() {
	return (
		<div className="hidden md:flex md:flex-col md:justify-center md:items-center">
			<div className="md:p-6 md:bg-purple-900 md:basis-1/5 md:m-4 md:rounded-xl">
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
			</div>
		</div>
	);
}
