// Your code here
const inputField = document.querySelector("#addToDo")
const list = document.querySelector("ul")

function addTask(){
    const task = inputField.value.trim ()
    if (task != ''){
       let liElement = document.createElement("li")
       liElement.innerHTML = (task)
       list.appendChild(liElement)
       inputField.value = " "
    }
}

function deleteTask(event){
    const clickedElement = event.target
    if(clickedElement.classList.contains("fa-trash")){
    const removeElement = clickedElement.parentElement.parentElement;
    list.removeChild(removeElement)
    }
}

inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
  
  list.addEventListener("click", deleteTask);