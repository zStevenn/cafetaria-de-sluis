export function MenuSubheader(props) {
  return(
    <p className="text-lg font-semibold py-2">{props.name}</p>
  );
}

export function MenuItem(props) {
  return(
    <div className="flex flex-row justify-between sm:justify-start flex-nowrap items-center md:justify-center">
      {/* Item name */}
      <p className="sm:basis-1/4 md:basis-1/3">{props.name}</p>
      {/* Allergy icons */}
      <div className="flex flex-row sm:basis-2/4 md:basis-1/3 justify-evenly sm:justify-center flex-nowrap">
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>
      {/* Price */}
      <p className="sm:basis-1/4 md:basis-1/3 md:text-center">&euro; {props.price}</p>
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
