import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Loading from "../components/Loading";

const Menu = lazy(() => import("../pages/Menu"));
const News = lazy(() => import("../pages/News"));
const Contact = lazy(() => import("../pages/Contact"));
// const Vacatures = lazy(() => import("../pages/Vacatures"));
const NotFound = lazy(() => import("../pages/NotFound"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("../pages/CookiePolicy"));
const FAQ = lazy(() => import("../pages/FAQ"));
const UnderConstruction = lazy(() => import("../pages/UnderConstruction"));

export default function DefaultRouter() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/nieuws" element={<News />} />
				<Route path="/vacatures" element={<UnderConstruction />} />
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
		</Suspense>
	);
}
