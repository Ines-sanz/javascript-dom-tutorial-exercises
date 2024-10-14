let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let myDiv = document.createElement("div")
	myDiv.style.background = "yellow"
	myDiv.innerHTML = "Hello world"
	document.body.appendChild(myDiv)
});
