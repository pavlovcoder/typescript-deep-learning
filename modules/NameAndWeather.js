"use strict";
var Name = (function () {
    /*
    first: string;
    second: string;
  
    constructor(first: string, second: string) {
      this.first = first;
      this.second = second;
    }
    */
    function Name(first, second) {
        this.first = first;
        this.second = second;
    }
    Name.prototype.getMessage = function () {
        return "Hi, " + this.first + " " + this.second;
    };
    return Name;
}());
exports.Name = Name;
var WeatherLocation = (function () {
    /*
    weather: string;
    city: string;
  
    constructor(weather: string, city: string) {
      this.weather = weather;
      this.city = city;
    }
    */
    function WeatherLocation(weather, city) {
        this.weather = weather;
        this.city = city;
    }
    WeatherLocation.prototype.getWeatherMessage = function () {
        return "Today, we have " + this.weather + " day, because we are in " + this.city;
    };
    return WeatherLocation;
}());
exports.WeatherLocation = WeatherLocation;
