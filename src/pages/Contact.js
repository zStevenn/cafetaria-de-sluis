import { Title } from "../components/Text"
import { ContactUs, ContactForm } from "../components/Contact"
import Map from "../components/Map"
import GoogleMapReact from "google-map-react"

export function Contaxct() {
	return (
		<div className="bg-primary flex flex-col">
			<Title text={"Contacteer ons!"} className="py-4" />
			<div className="flex flex-col md:flex-row justify-center gap-4 m-8">
				<ContactForm className="p-8 w-full md:w-1/2" />
				<Map />
			</div>
			<ContactUs />
		</div>
	)
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function Contact() {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	}

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
			</GoogleMapReact>
		</div>
	)
}
