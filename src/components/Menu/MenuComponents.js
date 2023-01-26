export function MenuSubheader(props) {
	return <p className="text-lg font-semibold pb-2">{props.name}</p>;
}

export function MenuItem(props) {
  const formattedPrice = Number(props.price).toFixed(2).replace(".", ",");

  return (
    <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-4 py-3 px-2 bg-primary my-6 rounded-lg shadow shadow-primary">
      {/* Item name */}
      <p className="col-span-2 capitalize text-white">{props.name}</p>
	{/* Description */}
	<p className="col-span-2 text-slate-300"></p>
      {/* Price */}
      <p className="row-span-2 tracking-wide text-white">&euro; {formattedPrice}</p>
    </div>
  );
}

export function AllergyMenu() {
	return (
		<div className="hidden md:flex md:flex-col md:justify-center md:items-center">
			<div className="md:p-6 md:bg-purple-900 md:basis-1/5 md:m-4 md:rounded-xl">
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
				<div className="flex flex-row flex-nowrap justify-between p-2">
					<span>icon</span>
					<span>Text</span>
				</div>
			</div>
		</div>
	);
}
