import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import Aboutus from "./pages/Aboutus";
import OurTechnology from "./pages/Technology/OurTechnology";
import Portfolio from "./pages/Portfolio/Portfolio";
import Mobapp from "./pages/Portfolio/Mobapp";
import Social from "./pages/Portfolio/Social";
import HeroSection from "./pages/Banner";
import CustomHeaderBanner from "./pages/Banner";
import ContactForm from "./components/ContactForm22";
import Appdev from "./pages/Services/Appdevelopment";
import Webdev from "./pages/Services/Webdevelopment";
import Pwadevelelopment from "./pages/Services/Pwadevelelopment";
import Bloglist from "./pages/Bloglist";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landingpage  />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/technology" element={<OurTechnology />} />
      <Route path="/blog" element={<Bloglist />} />
      <Route path="/services/app-development" element={<Appdev />} />
      <Route path="/services/web-development" element={<Webdev />} />
      <Route path="/services/pwa-development" element={<Pwadevelelopment />} />
    

    </Routes>
  );
}
export default App;
