const InputField = ({ name, value, onChange, type = "text", placeholder = "Vul hier in..." }) => {
	return (
		<>
			{type === "textarea" ? (
				<textarea
					className="block w-full h-32 px-3 py-2 bg-white text-primary border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
					name={name}
					value={value}
					onChange={onChange}
          placeholder={placeholder}
				/>
			) : (
				<input
					className="block w-full px-3 py-2 bg-white text-primary border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:italic"
					type={type}
					name={name}
					value={value}
					onChange={onChange}
          placeholder={placeholder}
				/>
			)}
		</>
	)
}

export default InputField
