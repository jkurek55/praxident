import './App.css';
import LandingPage from './pages/landingPage';
import CennikUslug from './pages/cennikUslug';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/praxident/cennik" element={<CennikUslug />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
