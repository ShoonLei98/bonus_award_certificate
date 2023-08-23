import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/certificate.scss";
// import "./assets/css/six_months_august_certificate_card.scss";
import BonusFrame from "./BonusFrame";
import ProductFrame from "./ProductFrame";
import SixMonthsBonusFrames from "./SixMonthsBonusFrames";
import "./assets/css/_august_certificate_card.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="certificate_layout">
          <div className="generate_certificate_container">
            <Routes>
              <Route path="/bonus-frames" element={<BonusFrame />} />
              <Route path="/product-frames" element={<ProductFrame />} />
              <Route
                path="/six-months-bonus"
                element={<SixMonthsBonusFrames />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
