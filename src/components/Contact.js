import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";

function FormInput(props) {
	return (
		<>
			<label className="block text-gray-700 text-sm font-bold mb-2 capitalize" htmlFor={props.name}>
				{props.name}
			</label>
			<input
				className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
				id={props.name}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</>
	);
}

function FormTextarea(props) {
	return (
		<>
			<label className="block text-gray-700 text-sm font-bold mb-2 capitalize" htmlFor={props.name}>
				{props.name}
			</label>
			<textarea
				className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
				id={props.name}
				rows="4"
				type={props.type}
				placeholder={props.placeholder}
			/>
		</>
	);
}

export function ContactForm(props) {
	return (
		<form className={`flex flex-col items-center bg-white shadow-md rounded-xl ${props.className}`}>
			<p className="text-center text-lg font-bold text-black p-2 tracking-wider">Contactformulier</p>
			<div className="mb-4">
				<FormInput name={"naam"} type={"text"} placeholder={"Voer je naam in"} />
			</div>
			<div className="mb-4">
				<FormInput name={"email"} type={"email"} placeholder={"Voer je email in"} />
			</div>
			<div className="mb-4">
				<FormInput name={"telefoon"} type={"text"} placeholder={"Voer je telefoonnummer in"} />
			</div>
			<div className="mb-6">
				<FormTextarea name={"bericht"} type={"text"} placeholder={"Voer hier je bericht in"} />
			</div>
			<div className="flex items-center justify-center">
				<button
					className="bg-purple-900/70 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					Verstuur
				</button>
			</div>
		</form>
	);
}

export function ContactUs() {
	return (
		<div className="flex flex-col sm:flex-row justify-evenly items-center mb-8">
			<div className="flex flex-col text-primary text-center items-center bg-white p-10 my-2 rounded-full w-40 h-40 ">
				<MdPhone className="text-3xl" />
				<span>(0343) - 531 646</span>
			</div>
			<div className="flex flex-col text-primary text-center items-center bg-white p-10 my-2 rounded-full w-40 h-40 ">
				<MdLocationOn className="text-3xl" />
				<span>De Sluis 25</span>
				<span>3972 CW</span>
			</div>
			<div className="flex flex-col text-primary text-center items-center bg-white p-10 my-2 rounded-full w-40 h-40 ">
				<MdEmail className="text-3xl" />
				<span>info@</span>
				<span>cafetariadesluis.nl</span>
			</div>
		</div>
	);
}
