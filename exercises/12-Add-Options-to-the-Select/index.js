let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here

let mySelect = document.querySelector("#mySelect")
for (let e in countries){
    let option = document.createElement("option")
    option.innerHTML = countries[e]
    option.value = countries[e]
    mySelect.appendChild(option)
}

mySelect.addEventListener('change', function() {
    let selectedCountry = mySelect.value
    alert(selectedCountry)
})