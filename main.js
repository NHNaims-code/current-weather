        const FtoC = i =>{
            const temp = i - 273;
            return temp.toFixed(2);
        }


        const displayInfo = ()=> {
            const cityNameInput = document.getElementById('inputCity').value;
            const cityName = cityNameInput || 'Dhaka'
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=38d071a17b80e2c5f2652ccb1436bd32')
            .then(e => e.json())
            .then(d => setInfo(d));
            const setInfo = d =>{
                const icon = d.weather[0].icon;
                document.getElementById('city').innerText = d.name;
                document.getElementById('temp').innerText = FtoC(d.main.temp);
                document.getElementById('weather').innerText = d.weather[0].main;
                document.getElementById('icon').src = 'https://openweathermap.org/img/wn/'+icon+'@2x.png'
                console.log('https://openweathermap.org/img/wn/'+icon+'@2x.png');
                document.getElementById('inputCity').value = "";
                console.log(d);
            }


        }
        // const cityNameInput = document.getElementById('inputCity').value;
        displayInfo();
        document.getElementById('searchBtn').addEventListener('click', displayInfo);

