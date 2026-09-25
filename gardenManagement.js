const temperature = 90;
if(temperature>80) {
    console.log("Watering on")
} else{
 console.log("Water off");
}
 
const timeOfDay = "Morning";
if(timeOfDay === "Evening"||timeOfDay==="Night"){
    console.log("Lights on");
} else{
  console.log("Lights off");
}

let soilMoisture =10;
while(soilMoisture<40){
    soilMoisture +=5
    console.log(soilMoisture);

}
