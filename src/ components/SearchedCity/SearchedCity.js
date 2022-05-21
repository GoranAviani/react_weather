import React from "react";


const SearchedCity = () => {
    return (
        <div className="searchedCity">

            <div className="currentTemperature">
                <div className="currentTemperatureTitle">Temperature</div>
                <div className="currentTemperatureNumber">current temp</div>
            </div>
            <div className="cityName">
                Split
            </div>
            <div>
                <div className="currentWeatherIcon">weather Icon</div>
            </div>
            <div className="searchedCityDetails">
                <div>
                    <div className="lowestTemperatureTitle">Daily lowest</div>
                    <div className="lowestTemperatureNumber">lowest temp</div>
                </div>
                <div>
                    <div className="highestTemperatureTitle">Daily highest</div>
                    <div className="highestTemperatureNumber">highest temp</div>
                </div>

                <div>
                    current weather desctiption
                </div>
            </div>
        </div>
    )
}