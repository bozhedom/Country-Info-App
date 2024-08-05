import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

const router = createBrowserRouter([
  {
    path: '/Country-Info-App-/',
    element: <CountryList />,
  },
  {
    path: '/Country-Info-App-/country/:name',
    element: <CountryDetail />,
  },
]);

function App() {
  return (
    // <Router>
    //   <div className="container mt-5">
    //     <Routes>
    //       <Route path="/" element={<CountryList />} />
    //       <Route path="/country/:name" element={<CountryDetail />} />
    //     </Routes>
    //   </div>
    // </Router>
    <RouterProvider className="container mt-5" router={router} />
  );
}

export default App;
