import React from "react";
import './Weather.css';
export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
</div>
                    <div className="col-3">
                        <input type="submit" placeholder="Search" className="btn btn-primary"/>
                    </div>
                </div>
            
            </form>
            <h1>Yangon</h1>
            <ul>
                <li>Wednesday 3:40pm</li>
                <li>Rainy</li>
            </ul>0
           <div className="row mt-3">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="Rain" className="float-left"/>
                 <span className="temperature">
                    20
                 </span>
                 <span className="unit"> °C</span>
             
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 100%</li>
<li>Humidity: 90%</li>
<li>Wind: 10 km/h</li>
                </ul>
            </div>
           </div>
        </div>
    )
}