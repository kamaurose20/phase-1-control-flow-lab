function scuberGreetingForFeet(numberofFeet){
  // Write your code here!
  if(numberofFeet <= 400){
    return "This one is on me!"
  }
  else if(numberofFeet > 2000 && numberofFeet < 2500){
    return "I will gladly take your thirty bucks.";
  }
  else if(numberofFeet > 400 && numberofFeet < 2000){
    return "That will be twenty bucks.";
  }
  else (numberofFeet >2500)
    return "No can do.";
  
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city ==="NYC"){
    return "Ok, sounds good.";
  }
  else{
    return "No go."
  }
  }



  function switchOnCharmFromTip(tip){
   
   switch (tip){
  case "generous":
    return "Thank you so much.";
  case "not as generous":
    return "Thank you.";
  default: return "Bye."
   }
  }
