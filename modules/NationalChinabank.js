"use strict";
var generalInfo = (function () {
    function generalInfo(title, budget, assets) {
        this.title = title;
        this.budget = budget;
        this.assets = assets;
    }
    generalInfo.prototype.getGeneralInfo = function () {
        return this.title + " which has " + this.budget + " with " + this.assets;
    };
    return generalInfo;
}());
exports.generalInfo = generalInfo;
var generalActivity = (function () {
    function generalActivity(projects, income, investors) {
        this.projects = projects;
        this.income = income;
        this.investors = investors;
    }
    generalActivity.prototype.getActivityInfo = function () {
        return "The China National Bank has a few projects, such as: " + this.projects + ". This firm get a " + this.income + " income and attract " + this.investors + " as new investors.";
    };
    return generalActivity;
}());
exports.generalActivity = generalActivity;
