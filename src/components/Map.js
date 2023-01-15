import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function SimpleMap() {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	}

	return (
		// Important! Always set the container height explicitly
		<div className="h-96 w-96">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDlvuD9TCX2ECMJ_hYmRcrAHHbJhV9_nOU" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
			</GoogleMapReact>
		</div>
	)
}
