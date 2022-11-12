const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b83f0d7cemshe9837fa89e8adebp1837a6jsn757f23889a97',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

const fetch =()=> fetch('https://fitness-calculator.p.rapidapi.com/idealweight?gender=male&height=180', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

fetch();