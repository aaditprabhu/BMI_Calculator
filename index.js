// wieght in kgs and height in meters
function bmiCalculator(weight, height){
  var bmi = weight / Math.pow(height, 2);
  return bmi;
}

var yourBMI = bmiCalculator(68, 1.8);
console.log("Your BMI is "+ Math.round(yourBMI));

