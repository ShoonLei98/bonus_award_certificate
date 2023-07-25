import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/certificate.scss';
import BonusFrame from './BonusFrame';
import ProductFrame from './ProductFrame';

function App() {
  return (
    <>
        <BrowserRouter>
          <div className='certificate_layout'>
            <div className='generate_certificate_container'>
              <Routes>
                <Route path="/bonus-frame" element={<BonusFrame />}/>
                <Route path='/product-frame' element={<ProductFrame />}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
