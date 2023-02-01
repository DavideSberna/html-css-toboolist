



let addTaskButton = document.querySelector("#buttonTask")
let addTaskInput = document.querySelector("input")
let addTaskDiv = document.querySelector(".divAddTask")
let task = document.createElement("span")

addTaskButton.addEventListener("click", () =>{
    addTaskInput.classList.toggle("inputNewTaskVisible")
    if(addTaskButton.innerHTML === "Aggiungi"){
        addTaskButton.innerHTML = "Add task"
        task.innerHTML = addTaskInput.value
        addTaskInput.value = "Scrivi ancora..."

        addTaskDiv.appendChild(task)
    } else{
        addTaskButton.innerHTML = "Aggiungi"
        
    }



})