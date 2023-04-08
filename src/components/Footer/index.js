import MobileFooter from "./MobileFooter"
import DesktopFooter from "./DesktopFooter"
import useWindowDimensions from "../../hooks/useWindowDimensions"

export default function Footer() {
	const { width } = useWindowDimensions()

	return <>{width > 768 ? <DesktopFooter /> : <MobileFooter />}</>
}