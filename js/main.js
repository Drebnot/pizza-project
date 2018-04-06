// Business Logic
function Pizza (toppings, size) {
this.toppings = [];
this.size = size;
this.price = 0;
}

Pizza.prototype.findCost = function() {
  if (this.size === "small") {
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


  // User Interface Logic
  $(document).ready(function() {
    $("#pizza-form").submit(function(event) {
      event.preventDefault();

      var radioSize =
      $("input:radio[name=size]:checked").val();
      var toppings =
      $("input:checkbox[name=toppings]:checked").each(function(){

  });

      var newPizza = new Pizza(toppings, radioSize);
        newPizza.findCost();




    $(newPizza.price).show;


  });

});
