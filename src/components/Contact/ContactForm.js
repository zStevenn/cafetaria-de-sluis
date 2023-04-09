import { useState } from "react"
import InputField from "../InputField"
import Label from "../Label"
import Modal from "../Modal"

// Encode data to be sent to Netlify
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

// Contact form component
export default function ContactForm(props) {
	// Create show modal status and message
	const [showModal, setShowModal] = useState(false);
	const [message, setMessage] = useState("Je bericht is successvol verstuurt. Dank je wel!");
	
	//Create an initial form state
	const initialState = {
		name: "",
		email: "",
		phone: "",
		message: "",
	}
	
	// Create state for form
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})
	
	// Handles modal dismiss
	const handleDismiss = () => {
  		setShowModal(false);
	}


	// Handle form submission
	const handleSubmit = e => {
		  // Destructure the formState to get the form fields
		  const { name, email, phone, message } = formState;

		  // Check if all fields are filled in
		  if (!name || !email || !phone || !message) {
		    	// If any of the fields are empty, display an error message
		    	setShowModal(true)
			setMessage("Vul a.u.b. alle velden in. Dit helpt ons met het verwerken van uw bericht. Hartelijk bedankt!")
		   	return;
		  }
		
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formState }),
		})
			.then(() => {
  				setShowModal(true)
				setMessage("Je bericht is successvol verstuurt. Dank je wel!")
				setFormState(initialState)
			})
			.catch(error => {
				setShowModal(true)
  				setMessage(error)
			});


		e.preventDefault()
	}

	// Handle form input changes
	const handleChange = e =>
		setFormState({ ...formState, [e.target.name]: e.target.value })

	return (
		<>
		<form
			onSubmit={handleSubmit}
			className={`grid text-white bg-primary rounded-xl ${props.className}`}
		>
			<p className="text-center text-lg font-bold text-white p-2 tracking-wider">
				Contactformulier
			</p>
			<div className="mb-4">
				<Label label="Naam" name="name" />
				<InputField
					type="text"
					name="name"
					value={formState.name}
					onChange={handleChange}
					placeholder="Vul hier je naam in..."
				/>
			</div>
			<div className="mb-4">
				<Label label="Email" name="email" />
				<InputField
					type="email"
					name="email"
					value={formState.email}
					onChange={handleChange}
					placeholder="Vul hier je email in..."
				/>
			</div>
			<div className="mb-4">
				<Label label="Telefoonnummer" name="phone" />
				<InputField
					type="text"
					name="phone"
					value={formState.phone}
					onChange={handleChange}
					placeholder="Vul hier je telefoonnummer in..."
				/>
			</div>
			<div className="mb-6">
				<Label label="Bericht" name="message" />
				<InputField
					type="textarea"
					name="message"
					value={formState.message}
					onChange={handleChange}
					placeholder="Vul hier je bericht in..."
				/>
			</div>
			<button
				className="bg-purple-900/70 hover:bg-purple-900 text-neutral-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Verstuur
			</button>
		</form>
		<Modal message={message} handleDismiss={handleDismiss} showModal={showModal} />
		</>
	)
}
