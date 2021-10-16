var $container = document.getElementById("container"),
    $city = document.getElementById("city"),
    $numberDegree = document.getElementById("numberDegree"),
    $iconTemp= document.getElementById("iconTemp"),
    $descriptionTemp = document.getElementById("descriptionTemp"),
    $city_actual = document.getElementById("city_actual")
    $min = document.getElementById("min"),
    $max = document.getElementById("max"),
    $cityInput = document.getElementById("cityInput");


 //Funciones accesorias
 
 const changeBackground = (obj) => {

 
        if (obj.weather[0].main == "Clouds" && obj.weather[0].icon == '03d'|| obj.weather[0].icon =='02d'|| obj.weather[0].icon =='04d') {
            
   $container.classList.remove($container.classList)
   $container.classList.add("container-dia-nublado")
        };

        if (obj.weather[0].main == "Clouds" && obj.weather[0].icon == '03n'|| obj.weather[0].icon =='02n'||obj.weather[0].icon =='04n') {
            
            $container.classList.remove($container.classList)
            $container.classList.add("container-noche-nublada")
                 };
    
   if (obj.weather[0].main == "Rain") {
    
        $container.classList.remove($container.classList)
       $container.classList.add("container-rainy")};
   
    if (obj.weather[0].main == "Snow") {
        
        $container.classList.remove($container.classList)
       $container.classList.add("container-snow")};

   if (obj.weather[0].main == "Mist") {
    
        $container.classList.remove($container.classList)
       $container.classList.add("container-mist")}
 
    if (obj.weather[0].main == "Clear" && obj.weather[0].icon == '01d') {
        
        $container.classList.remove($container.classList)
       $container.classList.add("container-dia-despejado")};

    if (obj.weather[0].main == "Clear" && obj.weather[0].icon == '01n') {
        
        $container.classList.remove($container.classList)
       $container.classList.add("container-noche-despejada")
  }

};

const mostrarDatos= (obj) => {

    $numberDegree.textContent = Math.floor(obj.main.temp);
    
    $descriptionTemp.textContent = obj.weather[0].description;
    $city_actual.textContent = obj.name;
    const icons = obj.weather[0].icon;
    $iconTemp.innerHTML = `<img src="images/${icons}.svg"></img>`;
    $min.textContent =  Math.floor(obj.main.temp_min);
    $max.textContent = Math.floor(obj.main.temp_max);
}

//Función principal
    const getWeatherData = async(city) => {

    const respuesta = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lang=sp&units=metric`, {
       "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "9e2f26159cmshf87ccc480471b8fp10a24ejsn17c7d7cf4ec2"
        },
    }); 
     
    
    const obj = await respuesta.json();

    console.log(obj)
    
  changeBackground(obj)
   mostrarDatos(obj)
}
 
 


window.onload= () => {
    getWeatherData("Buenos Aires");
}


$city.addEventListener("submit", e=>{
    e.preventDefault();
    getWeatherData($cityInput.value)
  
});
