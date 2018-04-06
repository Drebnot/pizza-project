// Business Logic
function Pizza (toppings, size) {
this.toppings = [];
this.size = size;
this.price = 15;
}

PizzaOrder.prototype.findCost = function() {

  var pizzaPrice = 15;
  if (this.size === "medium") {
    pizzaCost += 5;
  } else if (this.size === "large") {
    pizzaPrice += 10;
  }

  }




// User Interface logic
// $(document).ready(function() {
//
//
// });
