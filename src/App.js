import "./styles/_styles.scss";
import "material-icons/iconfont/material-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/_home/HomePage";
import PlaygroundPage from "./components/pages/playground/PlaygroundPage";
import MotionPage from "./components/pages/motion/MotionPage";
import SpacingPage from "./components/pages/spacing/SpacingPage";
import LayoutPage from "./components/pages/layout/LayoutPage";
import TypographyPage from "./components/pages/typography/TypographyPage";
import ColorPage from "./components/pages/color/ColorPage";
import ElevationPage from "./components/pages/elevation/ElevationPage";
import BorderPage from "./components/pages/border/BorderPage";
import ShapePage from "./components/pages/shape/ShapePage";
import IconographyPage from "./components/pages/iconography/IconographyPage";
import ContactPage from "./components/pages/_contact/ContactPage";

import AvatarPage from "./components/pages/_components/avatar/AvatarPage";
import ButtonPage from "./components/pages/_components/button/ButtonPage";
import CheckboxPage from "./components/pages/_components/checkbox/CheckboxPage";
import InputSearchPage from "./components/pages/_components/input-search/InputSearchPage";
import InputSelectPage from "./components/pages/_components/input-select/InputSelectPage";
import InputTextPage from "./components/pages/_components/input-text/InputTextPage";
import RadioPage from "./components/pages/_components/radio/RadioPage";
import SwitchPage from "./components/pages/_components/switch/SwitchPage";
import TextareaPage from "./components/pages/_components/textarea/TextareaPage";

import LeftNav from "./components/app/LeftNav/LeftNav";

function App() {
  return (
    <div className="app-grid">
      <BrowserRouter>
        <LeftNav />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/playground/" element={<PlaygroundPage />} />
          <Route path="/color/" element={<ColorPage />} />
          <Route path="/typography/" element={<TypographyPage />} />
          <Route path="/motion/" element={<MotionPage />} />
          <Route path="/spacing/" element={<SpacingPage />} />
          <Route path="/layout/" element={<LayoutPage />} />
          <Route path="/elevation/" element={<ElevationPage />} />
          <Route path="/border/" element={<BorderPage />} />
          <Route path="/shape/" element={<ShapePage />} />
          <Route path="/iconography/" element={<IconographyPage />} />
          <Route path="/components/avatar" element={<AvatarPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/checkbox" element={<CheckboxPage />} />
          <Route
            path="/components/input-search"
            element={<InputSearchPage />}
          />
          <Route
            path="/components/input-select"
            element={<InputSelectPage />}
          />
          <Route path="/components/input-text" element={<InputTextPage />} />
          <Route path="/components/radio" element={<RadioPage />} />
          <Route path="/components/switch" element={<SwitchPage />} />
          <Route path="/components/textarea" element={<TextareaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
