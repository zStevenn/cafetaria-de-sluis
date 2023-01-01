export function MenuSubheader(props) {
  return(
    <p className="text-lg font-semibold py-2">{props.name}</p>
  );
}

export function MenuItem(props) {
  return(
    <div className="flex flex-row flex-nowrap items-center">
      {/* Item name */}
      <p className="basis-1/2">{props.name}</p>
      {/* Price */}
      <p className="basis-1/2 text-end">&euro; {props.price}</p>
    </div>
  );
}

export function AllergyMenu() {
  return(
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
