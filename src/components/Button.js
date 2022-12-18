export function PrimaryButton(props) {
	return (
		<a className="px-2" href={props.to}>
			<button className="truncate bg-secondary hover:bg-secondary/60 text-white font-bold py-2 px-4 border-2 border-secondary rounded-lg">
				{props.children}
			</button>
		</a>
	);
}

export function SecondaryButton(props) {
	return (
		<a className="px-2" href={props.to}>
			<button className="truncate bg-transparent/10 hover:bg-transparent/30 text-white font-bold py-2 px-4 border-2 border-white rounded-lg">
				{props.children}
			</button>
		</a>
	);
}
