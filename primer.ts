import { Name, WeatherLocation } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";
import * as InfoAndActivityChinaBank from './modules/NationalChinabank';
//import { TempConverter } from './tempConverter';

console.log('Hello my dear world!');
console.log('I really want to eat pineapple :)');

//First type of function declaration: function expression:
let first_expr = function () {
  console.log('First type of expression!');
}

first_expr();

//Second type of function declaration: hoisting function:
second_expr();

function second_expr() {
  console.log('Second type of expression!');
} 

//Function with default arguments:
let def_args = function (name, surname, profile = "holder", bill = "credit", balance = "0", interest = "3.53%") {
  console.log(`Client of City Bank: ${name} ${surname}`);
  console.log(`Client's profile: ${profile}`);
  console.log(`Client's bill: ${bill}`);
  console.log(`Client's balance: ${balance}`);
  console.log(`Credit card's interest: ${interest}`);
}

def_args('John', 'Rockfeller');

//Function with residual arguments:
let resid_args = function (client, bank, balance, adress, ...add_info) {
  console.log(`Client: ${client} \n Bank: ${bank} \n Balance: ${balance} \n Adress: ${adress}`);
  add_info.forEach(info => {
    console.log(info);
  });
}

resid_args('Barbara Wyszyńska', 'Pekao Bank', '$8453', 'Warsaw, ul.Jozefa Pilsudskiego 34/8A', 'Female', 'Credit History: 3 years', 'Finance status: employed');

let name = new Name('Christian', 'Freeman');
let loc = new WeatherLocation('shiny', 'Washington');
let other = new OtherName();

console.log('Importing modules as aliases:');
console.log(name.getMessage());
console.log(loc.getWeatherMessage());
console.log(other.message);

let genInfo = new InfoAndActivityChinaBank.generalInfo('Natinal China Bank', '$300 billion', '$1 trillion');
let genActivity = new InfoAndActivityChinaBank.generalActivity('National Chinese Infrastructure Projects', '$57 billion', 207);

console.log(genInfo.getGeneralInfo());
console.log(genActivity.getActivityInfo());

//let cTemp = TempConverter.convertFtoC('55');

//console.log(`Temperature on the Seatle at today is ${cTemp}`);

//Using a special indexed type of data:
let cities: { [index: string]: [string, string] } = {};

cities['London'] = ['shiny', '15C'];
cities['Warsaw'] = ['sunny', '25C'];
cities['Paris'] = ['Mainly cloudy', '10C'];
cities['Washington'] = ['snowy', '-21C'];

for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}