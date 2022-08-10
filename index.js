const ip_address = document.getElementById("ip-address")
const loc = document.getElementById("location")
const timezone = document.getElementById("timezone")
const isp = document.getElementById("isp")
const addressInput = document.getElementById("address-input")
const searchBtn = document.getElementById("btn")
let map
let localIP

const svgIcon = L.divIcon({
  html: `
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="56">
    <path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/>
</svg>`,
  className: "",
  iconSize: [46, 56],
  iconAnchor: [12, 40],
});

window.onload = function() {
    fetch("https://api.ipify.org/?format=json")
        .then(res => res.json())
        .then(data => assignLocal(data))
}

function assignLocal(data) {
    addressInput.value = data.ip
    searchAddress()
}

function validateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
        return (true)  
    }  
    alert("You have entered an invalid IP address!")  
    return (false)  
}  

function searchAddress() {
    let val = addressInput.value
    validateIPaddress(val) // in case it is invalid, an alert will pop-up
    if (validateIPaddress(val)) {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_IE4tmmYuDmz7GxV4wGAmUklPW9d8q&ipAddress=${val}`)
            .then(res => res.json())
            .then(data => showMapAndData(data))
    }
}

function showMapAndData(data) {
    let container = L.DomUtil.get('map')
    if(container != null) {
        container._leaflet_id = null
    }
    map = L.map('map').setView([data.location.lat, data.location.lng], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map)
    L.marker([data.location.lat, data.location.lng], { icon: svgIcon }).addTo(map)
    ip_address.textContent = data.ip
    loc.textContent = data.location.city + ", " + data.location.country + " " + data.location.postalCode
    timezone.textContent = "UTC " + data.location.timezone
    isp.textContent = data.isp
}

searchBtn.addEventListener("click", searchAddress)

