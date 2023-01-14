import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md"

function FormInput(props) {
	return (
		<>
			<label
				className="block text-gray-700 text-sm font-bold mb-2 capitalize"
				htmlFor={props.name}
			>
				{props.label}
			</label>
			<input
				className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</>
	)
}

function FormTextarea(props) {
	return (
		<>
			<label
				className="block text-gray-700 text-sm font-bold mb-2 capitalize"
				htmlFor={props.name}
			>
				{props.label}
			</label>
			<textarea
				className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
				name={props.name}
				rows="4"
				placeholder={props.placeholder}
			/>
		</>
	)
}

export function ContactForm(props) {
	return (
		<form
			name="contact"
			method="post"
			className={`flex flex-col items-center bg-white shadow-md rounded-xl ${props.className}`}
		>
			<input type="hidden" name="form-name" value="contact" />
			<p className="text-center text-lg font-bold text-black p-2 tracking-wider">
				Contactformulier
			</p>
			<div className="mb-4">
				<FormInput
					label={"Naam"}
					name={"name"}
					type={"text"}
					placeholder={"Voer je naam in"}
				/>
			</div>
			<div className="mb-4">
				<FormInput
					label={"Email"}
					name={"email"}
					type={"email"}
					placeholder={"Voer je email in"}
				/>
			</div>
			<div className="mb-4">
				<FormInput
					label={"Telefoonnummer"}
					name={"phone"}
					type={"text"}
					placeholder={"Voer je telefoonnummer in"}
				/>
			</div>
			<div className="mb-6">
				<FormTextarea
					label={"Bericht"}
					name={"message"}
					placeholder={"Voer hier je bericht in"}
				/>
			</div>
			<div className="flex items-center justify-center">
				<button
					className="bg-purple-900/70 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Verstuur
				</button>
			</div>
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
