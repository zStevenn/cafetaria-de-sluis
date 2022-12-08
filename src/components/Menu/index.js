import { MenuItem, MenuSubheader } from "./MenuComponents";

export default function Menu() {
  return (
    <div className="flex flex-col flex-nowrap justify-start">
      <p className="text-white text-2xl font-bold text-center m-3">Menukaart</p>
      <div className="text-white mx-6">
        <MenuSubheader name={"Menu header 1"}/>
        <MenuItem name={"Menu item 1"} price={"9.95"}/>
        <MenuItem name={"Menu item 1"} price={"9.95"}/>
        <MenuItem name={"Menu item 1"} price={"9.95"}/>
        <MenuItem name={"Menu item 1"} price={"9.95"}/>
      </div>
      <div className="text-white mx-6">
        <MenuSubheader name={"Menu header 2"}/>
        <MenuItem name={"Menu item 3"} price={"9.95"}/>
        <MenuItem name={"Menu item 3"} price={"9.95"}/>
        <MenuItem name={"Menu item 3"} price={"9.95"}/>
        <MenuItem name={"Menu item 3"} price={"9.95"}/>
      </div>
      <div className="text-white mx-6">
        <MenuSubheader name={"Menu header 2"}/>
        <MenuItem name={"Menu item 5"} price={"9.95"}/>
        <MenuItem name={"Menu item 6"} price={"9.95"}/>
        <MenuItem name={"Menu item 8"} price={"9.95"}/>
        <MenuItem name={"Menu item 74"} price={"9.95"}/>
      </div>
    </div>
  );
}
