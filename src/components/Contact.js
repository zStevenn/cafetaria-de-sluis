import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md"
import { useState } from "react"
import InputField from "./InputField"
import Label from "./Label"

// Encode data to be sent to Netlify
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

// Contact form component
export function ContactForm(props) {
	// Create state for form
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})

	// Create state for form submission
	const [submitting, setSubmitting] = useState(false)
	// Create state for form submission status
	const [status, setStatus] = useState({
		submitted: false,
		message: null,
	})

	// Handle form submission
	const handleSubmit = async e => {
		// Prevent default form submission
		e.preventDefault()
		// Set submitting to true
		setSubmitting(true)
		// Send form data to Netlify
		try {
			const res = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact", ...formState }),
			})
			// Check if response is ok
			const text = await res.text()
			// If response is ok, set status to submitted
			if (text === "OK") {
				setStatus({
					submitted: true,
					message: "Thank you for the message, we will get back to you soon!",
				})
				setFormState({
					name: "",
					email: "",
					phone: "",
					message: "",
				})
				// If response is not ok, set status to failed
			} else {
				setStatus({ submitted: false, message: "Failed to submit" })
			}
			// Catch errors
		} catch (error) {
			setStatus({ submitted: false, message: error.message })
		}
		// Set submitting to false
		setSubmitting(false)
	}

	// Handle form input changes
	const handleChange = e =>
		setFormState({ ...formState, [e.target.name]: e.target.value })

	return (
		<form
			onSubmit={handleSubmit}
			className={`flex flex-col items-center bg-white shadow-md rounded-xl ${props.className}`}
		>
			<input type="hidden" name="form-name" value="contact" />
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
			{status.message && (
				<div
					className={`${status.submitted ? "text-primary" : "text-red-500"}`}
				>
					{status.message}
				</div>
			)}
			<button
				disabled={submitting}
				className="bg-purple-900/70 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Verstuur
			</button>
		</form>
	)
}

export function ContactUs() {
	return (
		<div className="flex flex-col sm:flex-row gap-4 px-8 justify-evenly items-center mb-8">
			<div className="flex flex-col text-primary text-center justify-center items-center bg-white p-10 my-2 rounded-lg w-full sm:w-1/3 h-full sm:h-48">
				<MdPhone className="text-3xl mb-2" />
				<p>(0343) - 531 646</p>
			</div>
			<div className="flex flex-col text-primary text-center justify-center items-center bg-white p-10 my-2 rounded-lg w-full sm:w-1/3 h-full sm:h-48">
				<MdLocationOn className="text-3xl mb-2" />
				<p>De Sluis 25, 3972 CW</p>
			</div>
			<div className="flex flex-col text-primary text-center justify-center items-center bg-white p-10 my-2 rounded-lg w-full sm:w-1/3 h-full sm:h-48">
				<MdEmail className="text-3xl mb-2" />
				<p>info@cafetariadesluis.nl</p>
			</div>
		</div>
	)
}
