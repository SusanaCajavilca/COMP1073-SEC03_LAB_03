const output = document.getElementById('output');

// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// function
function Hamburger(typeBun, vegetableList, cheese, saucesList, patty, quantityPatty, additionalVeggies){
   this.typeBun = typeBun;
   this.vegetableList = vegetableList;
   this.cheese = cheese;
   this.saucesList =saucesList;
   this.patty = patty;
   this.quantityPatty = quantityPatty;
   this.additionalVeggies = additionalVeggies;

   // function that ouputs a sentence that describes the hamburguer in the html body 
   this.printBurger = function(){
      output.textContent = `This delicious hamburger has ${this.typeBun} for bun,  ${this. vegetableList} for vegetables,
      ${this.cheese} for cheese, ${this.saucesList} sauces included, ${this.patty} for the meat, ${this.quantityPatty} as a quantity of meat,
      and ${this.additionalVeggies} for additional veggies.`
      output.style.backgroundColor= "cyan";
   }
}

//creating  a couple of different hamburguers using the 'new' keyword
let burger1 = new Hamburger("Ciabatta",["lettuce","tomatoes"],"cheddar",["ranch","keptchup"],"chicken","single",["pickles","olives"]);
let burger2=  new Hamburger("Brioche",["spinach","carrots"],"ricotta",["mustard","keptchup"],"beef","double",["peppers","olives"]);

