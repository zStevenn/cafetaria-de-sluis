export function MenuSubheader(props) {
  return(
    <p className="text-lg font-semibold py-2">{props.name}</p>
  );
}

export function MenuItem(props) {
  return(
    <div className="flex flex-row justify-between flex-nowrap">
      {/* Item name */}
      <p>{props.name}</p>
      {/* Allergy icons */}
      <div className="flex flex-row justify-evenly flex-nowrap">
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>
      {/* Price */}
      <p>&euro; {props.price}</p>
    </div>
  );
}
