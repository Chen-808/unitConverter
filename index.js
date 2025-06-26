let unitValue = document.getElementById("unitToBeConverted")
let convertButton = document.getElementById("convert-button")
let feet = document.getElementById("feet")
let meters = document.getElementById("meters")
let length = document.getElementById("unit-length")
let volume = document.getElementById("unit-volume")
let mass = document.getElementById("unit-mass")
let unit 
convertButton.addEventListener("click",function(){
    unit = unitValue.value 
    length.innerHTML = `${unit} meters = ${(unit*3.281).toFixed(3)} feet | ${unit} feet = ${(unit*0.3048).toFixed(3)} meters`
    volume.innerHTML = `${unit} liters = ${(unit*0.264).toFixed(3)} gallons | ${unit} gallons = ${(unit*3.78541).toFixed(3)} liters`
    mass.innerHTML= `${unit} kilos = ${(unit*2.204).toFixed(3)} pounds | ${unit} pounds = ${(unit*0.453592).toFixed(3)} kilos`
})