let response = "";
let toppings,isTopping = "";

function order(clicked_id){
      response=clicked_id;
        completeOrder();
  }

  function completeOrder() {
    switch(response) {
        case "bur":
           isTopping = prompt("Great Choice, Would you like add anything to your burger? (Yes/No)");
          if (isTopping=="yes") {
            toppings = prompt("Please type down you desired toppings, (Lettus,Tomtats,Onion,Extra Petty)");
            alert("Perfect, we have got your order: Burger with "+ toppings);
          }
          else if (isTopping=="no"){
            alert("Ok then, Burger it is!");
          }
          else {
            alert("Please type (Yes/No)");
          }
          break;
        case "piz":
             isTopping = prompt("Great Choice, Would you like add anything to your pizza? (Yes/No)");
            if (isTopping=="yes") {
              toppings = prompt("Please type down you desired toppings, (Olives,Tomtats,Onion,Extra Cheese)");
              alert("Perfect, we have got your order: Pizza with "+ toppings);
            }
            else if (isTopping=="no"){
            alert("Ok then, Pizza it is!");
          }
          else {
            alert("Please type (Yes/No)");
          }
          break;
      }
  }
  
