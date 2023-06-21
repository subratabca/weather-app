var input = document.querySelector('.input_text');
var main = document.querySelector('.name');
var temp = document.querySelector('.temp');
var humi = document.querySelector('.humi');
var desc = document.querySelector('.desc');;
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var nameValue = data['name'];
  var temValue = data['main']['temp'];
  var tempValue = temValue - 273.15;
  var humidityValue = data['main']['humidity'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  temp.innerHTML = tempValue.toFixed(2);
  humi.innerHTML = humidityValue;
  desc.innerHTML = descValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})