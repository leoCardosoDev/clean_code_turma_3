exports.calculateRide = function(distance, date) {
  if (date.getHours() >= 22) {
      return distance * 3.90; 
  } else {
       if (date.getDay() === 0) {
           return distance * 2.9;
       } else {
           return distance * 2.10;
       }
  }
}
