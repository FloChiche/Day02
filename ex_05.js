function getBasketContent () {
	const fruits = [
  {name: 'Strawberry', quantity: 3},
  {name: 'Apple', quantity: 2},
  {name: 'Lime', quantity: 2},
  {name: 'Peach', quantity: 1},
  {name: 'Peat', quantity: 2},
];
  
  let basket = [];
  let totalFruits = 0;
  
  fruits.forEach(fruit => {
  	for (let i = 0; i < fruit.quantity; i++) {
    	basket.push(fruit.name);
      }
      totalFruits += fruit.quantity;
      });
      
      console.log(`${totalFruits} fruit(s) selected`);
      
      return basket;
      }


// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
