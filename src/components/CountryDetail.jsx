import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCountry(response.data[0]);
        } else {
          setError('Данные о стране не найдены.');
        }
      })
      .catch((error) => {
        setError(`Ошибка при загрузке данных: ${error}`);
      });
  }, [name]);

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

  if (!country) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h1>{country.name.common}</h1>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6 text-center">
              <img
                src={country.flags.png}
                className="img-fluid"
                alt={`Флаг ${country.name.common}`}
                style={{ width: '200px' }}
              />
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Столица:</strong> {country.capital}
                </li>
                <li className="list-group-item">
                  <strong>Регион:</strong> {country.region}
                </li>
                <li className="list-group-item">
                  <strong>Популяция: </strong>
                  {country.population.toLocaleString()}
                </li>
                <li className="list-group-item">
                  <strong>Площадь:</strong> {country.area.toLocaleString()} км²
                </li>
                <li className="list-group-item">
                  <strong>Языки: </strong>
                  {Object.values(country.languages).join(', ')}
                </li>
                <li className="list-group-item">
                  <strong>Валюта: </strong>
                  {Object.values(country.currencies)
                    .map((currency) => `${currency.name} (${currency.symbol})`)
                    .join(', ')}
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/Country-Info-App/" className="btn btn-secondary">
                  Назад в список стран
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
