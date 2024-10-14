let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let myList = document.querySelector("#myList")
	let newLi = document.createElement("li")
	newLi.innerHTML = "New item"
	myList.appendChild(newLi)
});
