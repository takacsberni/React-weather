import React from "react";
import {Button, Card} from 'semantic-ui-react';
import moment from 'moment';

const refresh = () => {
    window.location.reload();
}

const WeatherCard = ( {weatherData}) => (
    <Card>
        <Card.Content>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            <Card.Header className="header">
                City name: {weatherData.name}
            </Card.Header>
            <p> Temperature: {weatherData.main.temp} &deg;C </p>
            <p> Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')} </p>
            <p> Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')} </p>
            <p> Description: {weatherData.weather[0].main} </p>
            <p> Day: {moment().format('dddd')}</p>
            <p> Date: {moment().format('LL')}</p>
        </Card.Content>
    </Card>
)

export default WeatherCard;
