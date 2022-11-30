import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Footer() {
  const { width } = useWindowDimensions();

  return (
    <>
    {width > 640 ? "desktop" : "mobile"}
    </>
  );
}