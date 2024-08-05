import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
