import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import './city.css';
import ReactTimeAgo from 'react-time-ago';
import Forecast from "../components/ModalForecast";


const City = () => {
  const {location} = useParams();
  const [cityName, setCityName] = useState('City Name');
    const [minTemp, setMinTemp] = useState('0');
    const [maxTemp, setMaxTemp] = useState('0');
    const [feelsLike, setFeelsLike] = useState('0');
    const [image, setImage] = useState('placeholder.jpg');


  const clientId = 'mZB6ATKRKi6d7xcSYEbjJ';
  const clientSecret = 'BsOIBK1QvfcWauq8c7z4iVzyw9MYZ8alOEVAusIB';
  const baseUrl = 'https://api.aerisapi.com/conditions/summary';


  useEffect(()=> {
    getInfo();
    // eslint-disable-next-line
    (cityName === 'City Name') ? document.title='Reactive Weather' : document.title=`${cityName}`;
  },[location])

  const formatName = (name) => {
    setCityName(name.replace(name[0], name[0].toUpperCase()));
  }

  const getInfo = ( ) => {
    fetch(`${baseUrl}/${location}?format=json&client_id=${clientId}&client_secret=${clientSecret}`)
        .then((result) => result.json())
        .then((result) => {
          formatName(result.response[0].place.name);
          setImage(result.response[0].periods[0].weather.icon);
          setMinTemp(result.response[0].periods[0].temp.minC);
          setMaxTemp(result.response[0].periods[0].temp.maxC);
          setFeelsLike(result.response[0].periods[0].feelslike.avgC);
        })
        .catch((err)=> console.error(err))
  }


  return (
      <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="card mb-3 w-50">
              <div className="row no-gutters">
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                      <img
                          src={process.env.PUBLIC_URL + `/icons/${image}`}
                          alt={`${cityName} weather`}
                      />
                  </div>
                  <div className="col-md-8">
                      <div className="card-body">
                          <h5 className="card-title font-weight-bold">{cityName}</h5>
                          <div className="card-text">
                              <p className="card-text">Max temperature: {maxTemp}&deg;C</p>
                              <p className="card-text">Min temperature: {minTemp}&deg;C</p>
                              <p className="card-text">It actually feels like: {feelsLike}&deg;C</p>
                              <div className="text-muted m-3">
                                  <ReactTimeAgo date={new Date()} locale="en-US" timeStyle="round-minute"/>
                              </div>

                              <Forecast
                                title={'Forecast'}
                                query={location}
                                clientId={clientId}
                                clientSecret={clientSecret}
                              />

                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>

  );
};

export default City;
