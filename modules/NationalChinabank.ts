export class generalInfo {
  constructor(title, budget, assets) {
    this.title = title;
    this.budget = budget;
    this.assets = assets;
  }

  getGeneralInfo() {
    return `${this.title} which has ${this.budget} with ${this.assets}`;
  }
}

export class generalActivity {
  constructor(projects, income, investors) {
    this.projects = projects;
    this.income = income;
    this.investors = investors;
  }

  getActivityInfo() {
    return `The China National Bank has a few projects, such as: ${this.projects}. This firm get a ${this.income} income and attract ${this.investors} as new investors.`;
  }
}