import useWindowDimensions from "../../hooks/useWindowDimensions";
import { MobileFooter } from "./FooterComponents";

export default function Footer() {
  const { width } = useWindowDimensions();

  return (
    <>
    {width > 640 ? "desktop" : <MobileFooter />}
    </>
  );
}