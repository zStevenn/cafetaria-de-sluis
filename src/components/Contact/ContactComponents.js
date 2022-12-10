function FormInput(props) {
	return (
		<>
			<label className='block text-gray-700 text-sm font-bold mb-2 capitalize' htmlFor={props.name}>
				{props.name}
			</label>
			<input
				className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic'
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
			<label className='block text-gray-700 text-sm font-bold mb-2 capitalize' htmlFor={props.name}>
				{props.name}
			</label>
			<textarea
				className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic'
				id={props.name}
        rows="4"
				type={props.type}
				placeholder={props.placeholder}
			/>
		</>
	);
}

export function ContactForm() {
	return (
		<div className='flex flex-col items-center my-8'>
			<form className='bg-white shadow-md rounded-xl px-8 pt-6 pb-8 w-full max-w-xs'>
        <p className="text-center text-lg font-bold text-black p-2 tracking-wider">Contactformulier</p>
				<div className='mb-4'>
					<FormInput name={'naam'} type={'text'} placeholder={'Voer je naam in'} />
				</div>
				<div className='mb-4'>
					<FormInput name={'email'} type={'email'} placeholder={'Voer je email in'} />
				</div>
				<div className='mb-4'>
					<FormInput name={'telefoon'} type={'text'} placeholder={'Voer je telefoonnummer in'} />
				</div>
				<div className='mb-6'>
					<FormTextarea name={'bericht'} type={'text'} placeholder={'Voer hier je bericht in'} />
				</div>
				<div className='flex items-center justify-center'>
					<button
						className='bg-purple-900/70 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='button'>
						Verstuur
					</button>
				</div>
			</form>
		</div>
	);
}

export function ContactUs() {
	return (
		<div className='flex flex-row flex-nowrap justify-evenly'>
			<div className='flex flex-col flex-nowrap'>
				<span>Icon</span>
				<span>Text</span>
			</div>
			<div className='flex flex-col flex-nowrap'>
				<span>Icon</span>
				<span>Text</span>
			</div>
			<div className='flex flex-col flex-nowrap'>
				<span>Icon</span>
				<span>Text</span>
			</div>
		</div>
	);
}
