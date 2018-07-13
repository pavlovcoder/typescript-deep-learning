"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.convertFtoC = function (temp) {
        var value = temp.toPrecision ? temp : parseFloat(temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
/*
export class TempConverter {
  static convertFtoC(temp: any): string {
    let value: number;
    if ((temp as number).toPrecision) {
      value = temp;
    } else if ((temp as string).indexOf) {
      value = parseFloat(<string>temp);
    } else {
      value = 0;
    }
    return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
  }
}
*/ 
