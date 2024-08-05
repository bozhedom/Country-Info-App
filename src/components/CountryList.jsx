import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        setError(`Ошибка при загрузке данных: ${error}`);
      });
  }, []);

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Произошла ошибка!</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">
            Пожалуйста, вернитесь к{' '}
            <Link to="/Country-Info-App/">списку стран</Link> и попробуйте
            снова.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Список стран</h1>
      <div className="row">
        {countries.map((country) => (
          <div key={country.cca3} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={country.flags.png}
                className="card-img-top flag-image"
                alt={`Флаг ${country.name.common}`}
              />
              <hr style={{ margin: '0px' }} />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Столица: {country.capital}</p>
                <Link
                  to={`/Country-Info-App/country/${country.name.common}`}
                  className="btn btn-primary"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
