import { Link } from "react-router-dom"

export function PrimaryButton(props) {
	return (
		<a href={props.to} target="_blank" rel="noopener noreferrer">
			<button className="truncate bg-secondary hover:bg-secondary/60 text-white font-bold py-2 px-4 border-2 border-secondary hover:border-secondary/60 rounded-lg">
				{props.children}
			</button>
		</a>
	)
}

export function ExternalSecondaryButton(props) {
	return (
		<a href={props.to} target="_blank" rel="noopener noreferrer">
			<button className="truncate bg-transparent/10 hover:bg-transparent/30 text-white font-bold py-2 px-4 border-2 border-white rounded-lg">
				{props.children}
			</button>
		</a>
	)
}

export function InternalSecondaryButton(props) {
	return (
		<Link to={props.to}>
			<button className="truncate bg-transparent/10 hover:bg-transparent/30 text-white font-bold py-2 px-4 border-2 border-white rounded-lg">
				{props.children}
			</button>
		</Link>
	)
}
