import { Title } from "../Text";
import { AllergyMenu, MenuItem, MenuSubheader } from "./MenuComponents";

export function Menu() {
  return (
    <div className="flex flex-row justify-start bg-primary py-8">
      {/* Desktop allergy slide */}
      <AllergyMenu />
      <div className="flex flex-col flex-nowrap basis-full md:basis-3/5">
        <Title text={"Menukaart"} />
        <div className="text-white mx-6 my-2">
          <MenuSubheader name={"Patat Frites"}/>
          <MenuItem name={"Patat mayonaise"} price={"9.95"}/>
          <MenuItem name={"Patat curry"} price={"9.95"}/>
          <MenuItem name={"Patat speciaal"} price={"9.95"}/>
          <MenuItem name={"Patat oorlog"} price={"9.95"}/>
        </div>
        <div className="text-white mx-6 my-2">
          <MenuSubheader name={"Snacks"}/>
          <MenuItem name={"Kroket"} price={"9.95"}/>
          <MenuItem name={"Frikandel"} price={"9.95"}/>
          <MenuItem name={"Kaassoufle"} price={"9.95"}/>
          <MenuItem name={"Kipcorn"} price={"9.95"}/>
        </div>
        <div className="text-white mx-6 my-2">
          <MenuSubheader name={"Milkshakes"}/>
          <MenuItem name={"Aardbei"} price={"9.95"}/>
          <MenuItem name={"Banaan"} price={"9.95"}/>
          <MenuItem name={"Chocolade"} price={"9.95"}/>
          <MenuItem name={"Vanille"} price={"9.95"}/>
        </div>
      </div>
    </div>
  );
}
