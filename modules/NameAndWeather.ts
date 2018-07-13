export class Name {
  /*
  first: string;
  second: string;

  constructor(first: string, second: string) {
    this.first = first;
    this.second = second;
  }
  */
 constructor(private first: string, private second: string) {}

  getMessage() : string {
    return `Hi, ${this.first} ${this.second}`;
  }
}

export class WeatherLocation {
  /*
  weather: string;
  city: string;

  constructor(weather: string, city: string) {
    this.weather = weather;
    this.city = city;
  }
  */
 constructor(private weather: string, private city:string) {}

  getWeatherMessage() : string {
    return `Today, we have ${this.weather} day, because we are in ${this.city}`;
  }
}