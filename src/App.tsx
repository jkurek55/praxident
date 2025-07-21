import './App.css';
import LandingPage from './pages/landingPage';
import CennikUslug from './pages/cennikUslug';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/praxident" element={<LandingPage />} />
        <Route path="/praxident/cennik" element={<CennikUslug />} />
      </Routes>
    </Router>
  );
}

export default App;
