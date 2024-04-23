const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '332b75f41dmsh3fc34beb2952723p15b720jsn8641cdcb0a0f',
		'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
	}
};

 const  getWeather =(city) =>{
	cityname.innerHTML=city
	fetch('https://weather-api138.p.rapidapi.com/weather?city_name= ' +city, options)
	.then(response => response.json())
	.then((response) => {
				console.log(response);
	
		temp.innerHTML = response.main.temp
		temp2.innerHTML = response.main.temp
		// temp3.innerHTML = response.main.temp
		feels_like.innerHTML = response.main.feels_like
		temp_min.innerHTML = response.main.temp_min
		temp_max.innerHTML = response.main.temp_max
		pressure.innerHTML = response.main.pressure
		pressure2.innerHTML = response.main.pressure
		humidity.innerHTML = response.main.humidity
		humidity2.innerHTML = response.main.humidity
		sea_level.innerHTML = response.main.sea_level
		grnd_level.innerHTML = response.main.grnd_level
		country.innerHTML=response.sys.country

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click" ,(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

// getWeather("Delhi")



