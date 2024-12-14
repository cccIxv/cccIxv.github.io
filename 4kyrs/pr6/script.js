const ourCords = {
    latitude: 48.94322304150436,
    longitude: 24.732023696663088,
}

let watchId = null

function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError)
}

function clearWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId)
        watchId = null
    }
}

function displayLocation(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let div = document.getElementById('location')
    div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`
    div.innerHTML += ` (with ${position.coords.accuracy} meters accuracy)`
    let km = computeDistance(position.coords, ourCords)
    let distance = document.getElementById('distance')
    distance.innerHTML = `You are ${km} km from the College`
}

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError)
        let watchButton = document.getElementById("watch")
        watchButton.onclick = watchLocation
        let clearWatchButton = document.getElementById("clearWatch")
        clearWatchButton.onclick = clearWatch
    } else {
        alert("Oops, no geolocation support")
    }
}

function displayError(error) {
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    }
    let errorMessage = errorTypes[error.code]
    if (error.code === 0 || error.code === 2) {
        errorMessage = errorMessage + " " + error.message
    }
    let div = document.getElementById("location")
    div.innerHTML = errorMessage
}

function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude)
    let startLongRads = degreesToRadians(startCoords.longitude)
    let destLatRads = degreesToRadians(destCoords.latitude)
    let destLongRads = degreesToRadians(destCoords.longitude)
    let Radius = 6371
    return Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180
}

document.addEventListener('DOMContentLoaded', getMyLocation)

let map = L.map('map').setView([0, 0], 13)
let marker, circle, zoomed, markerSearch
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,}).addTo(map)

const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const changePoint = (latitude, longitude, accuracy) => {
    marker = L.marker([latitude, longitude]).addTo(map)
        .bindPopup(`You are here: ${latitude}, ${longitude}`)
    circle = L.circle([latitude, longitude], {accuracy: accuracy}).addTo(map)
    if (!zoomed) zoomed = map.fitBounds(circle.getBounds())
    map.setView([latitude, longitude])
}

const addMarker = (latitude, longitude) => {
    L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1
    }).addTo(map)
        .bindPopup(`Recorded changes: ${latitude}, ${longitude}<br>Time: ${new Date().toLocaleString()}`)
        .openPopup()
}

const displayLocation = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const accuracy = position.coords.accuracy

    if (!marker || Math.abs(marker._latlng.lat - latitude) >= 0.0001 || Math.abs(marker._latlng.lng - longitude) >= 0.0001) {
        if (marker) {
            map.removeLayer(marker)
            map.removeLayer(circle)
        }
        addMarker(latitude, longitude)
        changePoint(latitude, longitude, accuracy)
    }
}

const displayError = (error) => {
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    }
    alert(errorTypes[error.code])
}

const searchFoo = () => {
    const arr = searchInput.value.trim().split(',')
    try {
        if (markerSearch) map.removeLayer(markerSearch)
        markerSearch = L.marker([Number(arr[0]), Number(arr[1])]).addTo(map)
            .bindPopup(`Searched place: ${Number(arr[0])}, ${Number(arr[1])}<br>Time[_{{{CITATION{{{_1{](https://github.com/zivjie/springboot-demo/tree/ea383eeb36c7295ccfe196394e3b9c3f0ce8e799/spring-boot-demo-upload%2FREADME.md)[_{{{CITATION{{{_2{](https://github.com/vupa2/Module2_1.5_number_to_word/tree/b969e9d844655eb9f531afe28984456f1b46300c/index.php)[_{{{CITATION{{{_3{](https://github.com/FayzSa/RemoteClassroom/tree/853d43bc2580f0a37541e4b856fb1ab703f62557/resources%2Fviews%2Fteacher%2Fclassrooms%2Fjoinmeeting.blade.php)[_{{{CITATION{{{_4{](https://github.com/ElDiabolus/things3-view/tree/ce12901ad258508a86a7bb0c1b5ed5453598a3ca/index.php)[_{{{CITATION{{{_5{](https://github.com/iballi2017/madeinlagos-v2/tree/8c69a9eb319b985279c3776d2f05be070fcb41aa/includes%2Fheader.php)[_{{{CITATION{{{_6{](https://github.com/leechunghyun95/shop/tree/cb90cc83ccd13915d57553e2b872ab2c4eeee0f4/index2.php)[_{{{CITATION{{{_7{](https://github.com/jinkeyy/BlogLuna/tree/ac0e6e32087750a8717189256057135e670d79bc/src%2Fcomponents%2FSearchText.js)