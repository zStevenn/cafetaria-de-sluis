export function MenuSubheader(props) {
	return <p className="text-lg font-semibold pb-2">{props.name}</p>;
}

export function MenuItem(props) {
  const formattedPrice = Number(props.price).toFixed(2).replace(".", ",");

  return (
    <div className="flex flex-row py-3 px-2 bg-primary my-6 rounded-lg shadow shadow-primary">
      {/* Item name */}
      <p className="w-3/4 capitalize text-primary">{props.name}</p>
      {/* Price */}
      <p className="w-1/4 tracking-wide text-primary">&euro; {formattedPrice}</p>
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
