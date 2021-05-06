import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import './ModalForecast.css';

function Forecast({title, query, clientId, clientSecret}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        getForecast();
    }
    const [forecastedPeriod, setForecastedPeriod] = useState([]);


    const getForecast = () => {
        fetch(`https://api.aerisapi.com/forecasts/${query}?format=json&filter=day&limit=5&fields=&client_id=${clientId}&client_secret=${clientSecret}`)
            .then((result) => result.json())
            .then((result) => {
                setForecastedPeriod(result.response[0].periods)
            })
            .catch((err) => console.error(err));
    }


    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Forecast
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="forecast-container d-flex justify-content-center align-items-center flex-sm-wrap">
                        {forecastedPeriod.map((period, i) => (
                            <span key={i} className="forecast-child">
                                <img
                                    src={process.env.PUBLIC_URL + `/icons/${period.icon}`}
                                    alt={'forecast'}
                                />
                                <p>{period.dateTimeISO.split('T').shift().toString()}</p>
                                <p>Max: {period.maxTempC}&deg;C</p>
                                <p>Min: {period.minTempC}&deg;C</p>
                                <p>Feels like: {period.avgFeelslikeC}&deg;C</p>
                            </span>
                        ))}
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Forecast;