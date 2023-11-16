const cities = [
    {
        "latitude": 52.367,
        "longitude": 4.904,
        "city": "Amsterdam",
        "country": "Netherlands"
    },
    {
        "latitude": 39.933,
        "longitude": 32.859,
        "city": "Ankara",
        "country": "Turkey"
    },
    {
        "latitude": 56.134,
        "longitude": 12.945,
        "city": "Åstorp",
        "country": "Sweden"
    },
    {
        "latitude": 37.983,
        "longitude": 23.727,
        "city": "Athens",
        "country": "Greece"
    },
    {
        "latitude": 54.597,
        "longitude": -5.93,
        "city": "Belfast",
        "country": "Northern Ireland"
    },
    {
        "latitude": 41.387,
        "longitude": 2.168,
        "city": "Barcelona",
        "country": "Spain"
    },
    {
        "latitude": 52.52,
        "longitude": 13.405,
        "city": "Berlin",
        "country": "Germany"
    },
    {
        "latitude": 46.948,
        "longitude": 7.447,
        "city": "Bern",
        "country": "Switzerland"
    },
    {
        "latitude": 43.263,
        "longitude": -2.935,
        "city": "Bilbao",
        "country": "Spain"
    },
    {
        "latitude": 50.847,
        "longitude": 4.357,
        "city": "Brussels",
        "country": "Belgium"
    },
    {
        "latitude": 47.497,
        "longitude": 19.04,
        "city": "Bucharest",
        "country": "Romania"
    },
    {
        "latitude": 59.329,
        "longitude": 18.068,
        "city": "Budapest",
        "country": "Hungary"
    },
    {
        "latitude": 51.483,
        "longitude": -3.168,
        "city": "Cardiff",
        "country": "Wales"
    },
    {
        "latitude": 50.937,
        "longitude": 6.96,
        "city": "Cologne",
        "country": "Germany"
    },
    {
        "latitude": 55.676,
        "longitude": 12.568,
        "city": "Copenhagen",
        "country": "Denmark"
    },
    {
        "latitude": 51.898,
        "longitude": -8.475,
        "city": "Cork",
        "country": "Ireland"
    },
    {
        "latitude": 53.349,
        "longitude": -6.26,
        "city": "Dublin",
        "country": "Ireland"
    },
    {
        "latitude": 55.953,
        "longitude": -3.188,
        "city": "Edinburgh",
        "country": "Scotland"
    },
    {
        "latitude": 43.7696,
        "longitude": 11.255,
        "city": "Florence",
        "country": "Italy"
    },
    {
        "latitude": 50.11,
        "longitude": 8.682,
        "city": "Frankfurt",
        "country": "Germany        "
    },
    {
        "latitude": 43.254,
        "longitude": 6.637,
        "city": "French Riviera",
        "country": "France"
    },
    {
        "latitude": 32.65,
        "longitude": -16.908,
        "city": "Funchal",
        "country": "Portugual"
    },
    {
        "latitude": 36.14,
        "longitude": -5.353,
        "city": "Gibraltar",
        "country": ""
    },
    {
        "latitude": 57.708,
        "longitude": 11.974,
        "city": "Gothenburg",
        "country": "Sweden     "
    },
    {
        "latitude": 53.548,
        "longitude": 9.987,
        "city": "Hamburg",
        "country": "Germany"
    },
    {
        "latitude": 60.169,
        "longitude": 24.938,
        "city": "Helsinki",
        "country": "Finland"
    },
    {
        "latitude": 39.02,
        "longitude": 1.482,
        "city": "Ibiza",
        "country": "Spain"
    },
    {
        "latitude": 50.45,
        "longitude": 30.523,
        "city": "Kyiv",
        "country": "Ukraine"
    },
    {
        "latitude": 61.115,
        "longitude": 10.466,
        "city": "Lillehammer",
        "country": "Norway"
    },
    {
        "latitude": 38.722,
        "longitude": -9.139,
        "city": "Lisbon",
        "country": "Portugual"
    },
    {
        "latitude": 51.507,
        "longitude": -0.127,
        "city": "London",
        "country": "England      "
    },
    {
        "latitude": 40.416,
        "longitude": -3.703,
        "city": "Madrid",
        "country": "Spain"
    },
    {
        "latitude": 39.695,
        "longitude": 3.017,
        "city": "Mallorca",
        "country": "Spain"
    },
    {
        "latitude": 53.48,
        "longitude": -2.242,
        "city": "Manchester",
        "country": "England       "
    },
    {
        "latitude": 43.296,
        "longitude": 5.369,
        "city": "Marseille",
        "country": "France"
    },
    {
        "latitude": 27.76,
        "longitude": -15.586,
        "city": "Maspalomas",
        "country": "Spain"
    },
    {
        "latitude": 45.464,
        "longitude": 9.19,
        "city": "Milan",
        "country": "Italy"
    },
    {
        "latitude": 48.135,
        "longitude": 11.582,
        "city": "Munich",
        "country": "Germany"
    },
    {
        "latitude": 40.851,
        "longitude": 14.268,
        "city": "Naples",
        "country": "Italy"
    },
    {
        "latitude": 43.034,
        "longitude": -2.417,
        "city": "Oñati",
        "country": "Spain"
    },
    {
        "latitude": 59.913,
        "longitude": 10.752,
        "city": "Oslo",
        "country": "Norway"
    },
    {
        "latitude": 48.856,
        "longitude": 2.352,
        "city": "Paris",
        "country": "France"
    },
    {
        "latitude": 50.075,
        "longitude": 14.437,
        "city": "Prague",
        "country": "Czech Republic"
    },
    {
        "latitude": 64.146,
        "longitude": -21.942,
        "city": "Reykjavík",
        "country": "Iceland"
    },
    {
        "latitude": 56.879,
        "longitude": 24.603,
        "city": "Riga",
        "country": "Latvia"
    },
    {
        "latitude": 41.902,
        "longitude": 12.496,
        "city": "Rome",
        "country": "Italy"
    },
    {
        "latitude": 39.453,
        "longitude": -31.127,
        "city": "Santa Cruz das Flores",
        "country": "Portugual"
    },
    {
        "latitude": 28.463,
        "longitude": -16.251,
        "city": "Santa Cruz de Tenerife",
        "country": "Spain"
    },
    {
        "latitude": 57.273,
        "longitude": -6.215,
        "city": "Skye",
        "country": "Scotland"
    },
    {
        "latitude": 42.697,
        "longitude": 23.321,
        "city": "Sofia",
        "country": "Bulgaria"
    },
    {
        "latitude": 59.329,
        "longitude": 18.068,
        "city": "Stockholm",
        "country": "Sweden"
    },
    {
        "latitude": 59.437,
        "longitude": 24.753,
        "city": "Tallinn",
        "country": "Estonia"
    },
    {
        "latitude": 18.208,
        "longitude": 16.373,
        "city": "Vienna",
        "country": "Austria"
    },
    {
        "latitude": 52.229,
        "longitude": 21.012,
        "city": "Warsaw",
        "country": "Poland"
    },
    {
        "latitude": 53.961,
        "longitude": -1.07,
        "city": "York",
        "country": "England"
    },
    {
        "latitude": 47.376,
        "longitude": 8.541,
        "city": "Zurich",
        "country": "Switzerland"
    }
]

const IMG_URL = {
    clearday: "https://www.7timer.info/img/misc/about_two_clear.png",
    clearnight: "https://www.7timer.info/img/misc/about_two_clear.png",

    pcloudyday: "https://www.7timer.info/img/misc/about_two_pcloudy.png",
    pcloudynight: "https://www.7timer.info/img/misc/about_two_pcloudy.png",

    mcloudyday: "https://www.7timer.info/img/misc/about_two_cloudy.png",
    mcloudynight: "https://www.7timer.info/img/misc/about_two_cloudy.png",

    cloudyday: "https://www.7timer.info/img/misc/about_two_cloudy.png",
    cloudynight: "https://www.7timer.info/img/misc/about_two_cloudy.png",

    humidday: "https://www.7timer.info/img/misc/about_two_rain.png",
    humidnight: "https://www.7timer.info/img/misc/about_two_rain.png",

    lightrainday: "https://www.7timer.info/img/misc/about_two_rain.png",
    lightrainnight: "https://www.7timer.info/img/misc/about_two_rain.png",

    oshowerday: "https://www.7timer.info/img/misc/about_two_rain.png",
    oshowernight: "https://www.7timer.info/img/misc/about_two_rain.png",

    ishowerday: "https://www.7timer.info/img/misc/about_two_rain.png",
    ishowernight: "https://www.7timer.info/img/misc/about_two_rain.png",

    lightsnowday: "https://www.7timer.info/img/misc/about_two_rain.png",
    lightsnownight: "https://www.7timer.info/img/misc/about_two_rain.png",

    rainday: "https://www.7timer.info/img/misc/about_two_rain.png",
    rainnight: "https://www.7timer.info/img/misc/about_two_rain.png",

    snowday: "https://www.7timer.info/img/misc/about_two_snow.png",
    snownight: "https://www.7timer.info/img/misc/about_two_snow.png",

    rainsnowday: "https://www.7timer.info/img/misc/about_two_snow.png",
    rainsnownight: "https://www.7timer.info/img/misc/about_two_snow.png",
}

const WEATHER = {
    clearday: "Clear",
    pcloudyday: "Partly Cloudy",
    mcloudyday: "Cloudy",
    cloudyday: "Very Cloudy",
    humidday: "Humid",
    lightrainday: "Light Rain",
    oshowerday: "Shower",
    ishowerday: "Shower",
    lightsnowday: "Light Snow",
    rainday: "Rainy",
    snowday: "Snow",
    rainsnowday: "Rain Snow",
}

const citySelect = document.getElementById("city-select");
const row = document.getElementById("row-result");
const loading = document.getElementById("loading");

for (var i = 0; i < cities.length; i++) {
    let city = cities[i];
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = city.city + ", " + city.country;
    opt.addEventListener('click', function (e) {
        console.log('Click happened for: ' + e.target.id);
    });

    citySelect.appendChild(opt)
}

async function loadAPI() {
    loading.style.visibility = "visible";
    row.style.visibility = "hidden";

    const city = cities[citySelect.value];
    const url = `https://www.7timer.info/bin/api.pl?lon=${city["longitude"]}&lat=${city["latitude"]}&product=civil&output=json`
    const response = await fetch(url);
    const data = await response.json();

    const init = data.init;
    const initDate = init.slice(0, 8);
    const initHour = init.slice(8);

    const date = new Date(initDate.slice(0, 4), initDate.slice(4, 6) - 1, initDate.slice(6))

    let cols = row.children;
    let initTimePoint = 2;

    if (initHour >= 6) {
        initTimePoint = 1;
    }

    let day;
    let night;

    for (let i = 0; i < cols.length; i++) {
        let col = cols[i];

        if (i == 0 && initHour >= 9) {
            day = {
                weather: "clearday"
            }
        }
        else {
            day = data.dataseries[i * 2 * 4 + initTimePoint];
            // night = movies.dataseries[(i * 2 + 1) * 4 + initTimePoint];
        }

        col.querySelector("h5").innerHTML = newDatePlus(date, i);
        col.querySelector("h4").innerHTML = WEATHER[day.weather];
        col.getElementsByClassName("img-day")[0].src = IMG_URL[day.weather];
    }

    loading.style.visibility = "hidden";
    row.style.visibility = "visible";
}

function newDatePlus(date, plus) {
    let newDate = new Date();
    newDate.setDate(date.getDate() + plus);
    return newDate.toString().slice(4, 15);
}

row.style.visibility = "hidden";
loading.style.visibility = "hidden";