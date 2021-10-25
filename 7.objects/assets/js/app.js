//1. all about me
const me = {
  name: "Severus Snape",
  dob: "1897-05-24",
  car: {
    brand: "volvo",
    model: "v70",
    wheels: 4,
  },
  familyFriends: ["rimmert", "rozemarijn", "jasper", "nanneke", "streepje"]
};

console.log("My name is " + me.name);

console.log("My car type is " + me.car.model);

for (let index = 0; index < me.familyFriends.length; index++) {
  const element = me.familyFriends[index];
  console.log(element + " is a family friend");
}

me.familyFriends.push("daan");
console.log(me);

me.car = {
  brand: "ford",
  model: "capri",
  wheels: 4
};
console.log(me);

// 2. Array of Objects
const beers = [
  {
      name: "Abbaye de Gembloux",
      brewery: "Lefebvre",
      type: "Amber",
      alcoholpercentage: 8.00
  },
  {
      name: "Alexander",
      brewery: "Rodenbach",
      type: "",
      alcoholpercentage: 6.50
  },
  {
      name: "Arabier",
      brewery: "De Dolle Brouwers",
      type: "dark brown",
      alcoholpercentage: 8.00
  },
  {
      name: "Bergenbier",
      brewery: "Dendria",
      type: "brown",
      alcoholpercentage: 5.10
  },
  {
      name: "Cupido",
      brewery: "Bosteels",
      type: "amber",
      alcoholpercentage: 7.80
  },
  {
      name: "Cuvée St. Amand",
      brewery: "Bavik",
      type: "dark golden",
      alcoholpercentage: 8.00
  },
  {
      name: "Duvel 7",
      brewery: "Moortgat",
      type: "brown",
      alcoholpercentage: 7.00
  },
  {
      name: "Duvel 8",
      brewery: "Moortgat",
      type: "brown",
      alcoholpercentage: 8.00
  },
  {
      name: "Maredsesous 9",
      brewery: "Moortgat",
      type: "dark brown",
      alcoholpercentage: 8.90
  },
  {
      name: "Pater Lieven",
      brewery: "Van Den Bossche",
      type: "amber",
      alcoholpercentage: 5.40
  }
];
console.log(beers);

// 1. 
function printAll(beers) {
  beers.forEach(element => {
      console.log(`${element.brewery} has a ${element.type} beer called ${element.name} with ${element.alcoholpercentage}% alcohol`);
  });
}

printAll(beers);

// 2. 
function getNames(beers) {
  return beers.map(function(element) {
      return element.name;
  });
}

console.log(getNames(beers));

// 3. 
function getAverageAlcoholPercentage(beers) {
  return beers.reduce(function(previous, element, currentIndex, beers) {
      return element.alcoholpercentage / beers.length + previous;
  }, 0);
}

console.log("The average alcohol percentage is: " + getAverageAlcoholPercentage(beers));


// 4. 
function getBeersOfType(beers, type) {
  return beers.filter(function(element) {
      return element.type === type;
  })
}

console.log(getBeersOfType(beers, "amber"));


// 5. 
// Using 'chained' higher order functions
function getBreweries(beers) {
  const seen = []
  return beers.map(function(element) {
      return element.brewery;
  }).filter(function(element) {
      // If the brewery is already in the seen-array, filter out
      for (let index = 0; index < seen.length; index++) {
          if (element === seen[index]) {
              return false;
          }
      }
      // It is not in seen array, now add it and return true
      seen.push(element)
      return true;
  })
}

console.log(getBreweries(beers));
