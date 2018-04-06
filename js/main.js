// Business Logic
function Pizza (toppings, size) {
this.toppings = [];
this.size = size;
this.price = 0;
}

Pizza.prototype.findCost = function() {
  if (this.size === "Small") {
    this.price = 10;
  } else if (this.size === "medium") {
    this.price = 15;
  } else if (this.size === "large") {
    this.price = 20;
  }
  for (var i = 0; i < this.toppings.length; i++) {
      this.price = this.price + 1;
    }
    return "$" + this.price;
  }





// User Interface logic
// $(document).ready(function() {
//
//
// });
