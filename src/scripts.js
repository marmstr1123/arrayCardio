console.log('wired!');

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let sixteenthCenturyFolk = inventors.filter(function(inventor){
   if(inventor.year >= 1500 && inventor.year < 1600){
      return true; //to keep them
   }
});
console.table(sixteenthCenturyFolk)
   //streamlined (1)
   //let sixteenthCenturyFolk = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
   //console.log(sixteenthCenturyFolk)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

let fullNamesArr = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(fullNamesArr);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let orderdSmarties = inventors.sort(function(person1, person2){
   if(person1.year > person2.year){
      return 1;
   } else {
      return -1;
   }
});
//streamilned:
//let orderdSmarties = inventors.sort((person1,person2)=> person1.year > person2.year ? 1 : -1);
console.table(orderdSmarties)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let theAgeofKnowledge = inventors.reduce((total, inventor) => {
   return total + (inventor.passed - inventor.year);
},0);
console.log(theAgeofKnowledge)

// 5. Sort the inventors by years lived
let theOldest = inventors.sort(function(a,b){
   let lastPerson = a.passed - a.year;
   let nextPerson = b.passed - b.year;
   return lastPerson > nextPerson ? -1 : 1 ;
});
console.log(theOldest)
console.table(theOldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris -> go there and opt+cmd+j and play in console
// const category = document.querySelector('.mw-category');
// const links = Array.from(document.querySelectorAll('a'));
// const fancyOf = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));


// 7. sort Exercise
// Sort the people alphabetically by last name

let abcSort = people.sort((lastOne, nextOne) => {
   let [aLast, aFirst] = lastOne.split(', ');
   let [bLast, bFirst] = lastOne.split(', ');
   return aLast > bLast ? 1 : -1 ;
});
console.log(abcSort)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'fly', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'fly', 'car', 'truck'];

let transportation = data.reduce(function(obj, item){
   if(!obj[item]){
      obj[item]=0;
   }
   obj[item]++;
   return obj;
},{})
console.log(transportation)
