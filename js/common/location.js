// 짱세의 구글 맵 API key가 있어야 함.
// https://console.cloud.google.com/
// <script src="https://maps.googleapis.com/maps/api/js?key={여기에 키 넣을 것}&libraries=places"></script>
var city;
var weather;

async function initializeMap() {
  try {
      const { latitude, longitude } = await getCurrentLocation();
      initMap(latitude, longitude);
      const {city, weather} = await getWeather(latitude, longitude);
      document.querySelector("#city > .location-city").textContent = `현재 위치: 위도: ${latitude}, 경도: ${longitude}`;
      console.log(city, weather);
      document.querySelector("#city > .city-weather").textContent = `도시: ${city}, 날씨: ${weather}`;
  } catch (error) {
      console.error("Error getting current location:", error);
  }
}

async function getWeather(latitude, longitude) {
  const API_Key = ""; 
  const lat = latitude;
  const lon = longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    city = data.name; 
    weather = data.weather[0].main;
    console.log(city, weather);
    return { city, weather }; // 날씨 정보 반환
  } catch (error) {
    console.error("Error getting weather data:", error);
    throw error; // 오류 발생 시 상위 호출자에게 오류 전달
  }
  // fetch(url).then(response => response.json().then(data => {
  //     const city = data.name; 
  //     const weather = data.weather[0].main;
  //     console.log(city, weather);
  //     return {city, weather};
  //     }
  // ));
  
}

function getCurrentCity() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const geocoder = new google.maps.Geocoder();
        const latLng = new google.maps.LatLng(latitude, longitude);

        geocoder.geocode({ location: latLng }, (results, status) => {
          if (status === "OK" && results[0]) {
            const city = results[0].address_components.find((component) =>
              component.types.includes("locality")
            );
            const cityName = city ? city.long_name : "Unknown";
            console.log("현재 도시:", cityName);
          } else {
            console.error("Geocoder failed due to:", status);
          }
        });
      },
      (error) => console.error("Error:", error.message)
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (error) => reject(error)
    );
  });
}

let map;

async function initMap(latitude, longitude) {
    // console.log(latitude, longitude);
    const position = { lat: latitude, lng: longitude };
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    // const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 15,
      center: position,
      mapId: "MAP_ID",
    });

    new google.maps.Marker({
      position: position,
      label: "현재 위치",
      map: map
    })
}

export {initializeMap, getCurrentCity, getCurrentLocation};
