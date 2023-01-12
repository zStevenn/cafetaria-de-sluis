import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Vacatures from "../pages/Vacatures";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";
import FAQ from "../pages/FAQ";

export default function DefaultRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/nieuws" element={<News />} />
			<Route path="/vacatures" element={<Vacatures />} />
			<Route path="/privacybeleid" element={<PrivacyPolicy />} />
			<Route path="/cookiebeleid" element={<CookiePolicy />} />
			<Route path="/FAQ" element={<FAQ />} />
			{/* Vacatures nest example */}
			{/* <Route path="vacatures">
						<Route index element={<Vacatures />} />
						<Route path=":vacatureId" element={<Vacatures />} />
						<Route path="*" element={<NotFound />} />
					</Route> */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
