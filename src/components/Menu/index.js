import { AllergyMenu, MenuItem, MenuSubheader } from "./MenuComponents";

export default function Menu() {
  return (
    <div className="flex flex-row justify-start">
      {/* Desktop allergy slide */}
      <AllergyMenu />
      <div className="flex flex-col flex-nowrap basis-full md:basis-3/5">
        <p className="text-white text-2xl md:text-3xl font-bold text-center m-3 md:mt-10">Menukaart</p>
        <div className="text-white mx-6">
          <MenuSubheader name={"Menu header 1"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
        </div>
        <div className="text-white mx-6">
          <MenuSubheader name={"Menu header 1"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
        </div>
        <div className="text-white mx-6">
          <MenuSubheader name={"Menu header 1"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
          <MenuItem name={"Menu item 1"} price={"9.95"}/>
        </div>
      </div>
    </div>
  );
}
