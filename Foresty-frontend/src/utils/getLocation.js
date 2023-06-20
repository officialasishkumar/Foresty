export const getLocationThroughIp = () => {
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO_TOKEN}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
        localStorage.setItem('location', JSON.stringify({ lat: res.latitude, long: res.longitude }));
     }) 
    .catch((err) => console.log(err));
};

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, altWay);
  } else {
    getLocationThroughIp();
  }
}

export async function showPosition(position) {
    localStorage.setItem('location', JSON.stringify({
        lat: position.coords.latitude,
        long: position.coords.longitude,
    }));
}

export function altWay() {
  getLocationThroughIp();
}

