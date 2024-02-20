import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/certificate.scss";
import "./assets/css/highest_sep_feb_bonus_certificate.scss";
import BonusFrame from "./BonusFrame";
import ProductFrame from "./ProductFrame";
import SixMonthsBonusFrames from "./SixMonthsBonusFrames";
import "./assets/css/_january_certificate_card.scss";
import "./assets/css/_three_months_february_2024_certificates.scss";
import ThreeMonthsBonusFrames from "./ThreeMonthsBonusFrames";
import SixMonthsTripsFrames from "./SixMonthsTripsFrames";
import "./assets/css/_year_end_trip_certificate_card.scss";

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
              <Route
                path="/trip-products"
                element={<ThreeMonthsBonusFrames />}
              />
              <Route
                path="/six-months-trips"
                element={<SixMonthsTripsFrames />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
