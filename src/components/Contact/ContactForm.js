import { useState } from "react"
import InputField from "../InputField"
import Label from "../Label"

// Encode data to be sent to Netlify
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

// Contact form component
export default function ContactForm(props) {
	// Create state for form
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})

	// Handle form submission
	const handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formState }),
		})
			.then(() => alert("Success!"))
			.catch(error => alert(error))

		e.preventDefault()
	}

	// Handle form input changes
	const handleChange = e =>
		setFormState({ ...formState, [e.target.name]: e.target.value })

	return (
		<form
			onSubmit={handleSubmit}
			className={`flex flex-col items-center bg-white shadow-md rounded-xl ${props.className}`}
		>
			<p className="text-center text-lg font-bold text-black p-2 tracking-wider">
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
				className="bg-purple-900/70 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Verstuur
			</button>
		</form>
	)
}