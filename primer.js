"use strict";
var NameAndWeather_1 = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var InfoAndActivityChinaBank = require('./modules/NationalChinabank');
//import { TempConverter } from './tempConverter';
console.log('Hello my dear world!');
console.log('I really want to eat pineapple :)');
//First type of function declaration: function expression:
var first_expr = function () {
    console.log('First type of expression!');
};
first_expr();
//Second type of function declaration: hoisting function:
second_expr();
function second_expr() {
    console.log('Second type of expression!');
}
//Function with default arguments:
var def_args = function (name, surname, profile, bill, balance, interest) {
    if (profile === void 0) { profile = "holder"; }
    if (bill === void 0) { bill = "credit"; }
    if (balance === void 0) { balance = "0"; }
    if (interest === void 0) { interest = "3.53%"; }
    console.log("Client of City Bank: " + name + " " + surname);
    console.log("Client's profile: " + profile);
    console.log("Client's bill: " + bill);
    console.log("Client's balance: " + balance);
    console.log("Credit card's interest: " + interest);
};
def_args('John', 'Rockfeller');
//Function with residual arguments:
var resid_args = function (client, bank, balance, adress) {
    var add_info = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        add_info[_i - 4] = arguments[_i];
    }
    console.log("Client: " + client + " \n Bank: " + bank + " \n Balance: " + balance + " \n Adress: " + adress);
    add_info.forEach(function (info) {
        console.log(info);
    });
};
resid_args('Barbara Wyszyńska', 'Pekao Bank', '$8453', 'Warsaw, ul.Jozefa Pilsudskiego 34/8A', 'Female', 'Credit History: 3 years', 'Finance status: employed');
var name = new NameAndWeather_1.Name('Christian', 'Freeman');
var loc = new NameAndWeather_1.WeatherLocation('shiny', 'Washington');
var other = new DuplicateName_1.Name();
console.log('Importing modules as aliases:');
console.log(name.getMessage());
console.log(loc.getWeatherMessage());
console.log(other.message);
var genInfo = new InfoAndActivityChinaBank.generalInfo('Natinal China Bank', '$300 billion', '$1 trillion');
var genActivity = new InfoAndActivityChinaBank.generalActivity('National Chinese Infrastructure Projects', '$57 billion', 207);
console.log(genInfo.getGeneralInfo());
console.log(genActivity.getActivityInfo());
//let cTemp = TempConverter.convertFtoC('55');
//console.log(`Temperature on the Seatle at today is ${cTemp}`);
//Using a special indexed type of data:
var cities = {};
cities['London'] = ['shiny', '15C'];
cities['Warsaw'] = ['sunny', '25C'];
cities['Paris'] = ['Mainly cloudy', '10C'];
cities['Washington'] = ['snowy', '-21C'];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
