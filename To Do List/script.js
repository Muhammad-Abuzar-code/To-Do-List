const search_bar = document.getElementById("to-do-input");
const task_container = document.querySelector(".task-container-div");
const addButton = document.getElementById("search-bar-button");

addButton.addEventListener("click", addTask);

function addTask(){
    if(search_bar.value == ""){
        alert("You must write something");
        return;
    }
    
    let taskForm = document.createElement("form");
    taskForm.classList.add("task-container");

    let checkBox = document.createElement("input");
    checkBox.id = "to-check";
    checkBox.type = "checkbox";

    checkBox.addEventListener("change", apply_lineOnText);

    function apply_lineOnText(){
        if(checkBox.checked){
            task_text.id = "complete-text";
        }
        else{
            task_text.removeAttribute("id");
        }
    }

    let task_text = document.createElement("span");
    task_text.classList.add("Task-text");
    task_text.innerHTML = search_bar.value;

    let task_cross_button = document.createElement("span");
    task_cross_button.innerHTML = "\u00d7";
    task_cross_button.classList.add("clear-btn");
    
    task_cross_button.addEventListener("click",task_remove);

    function task_remove(){
        taskForm.remove();
    }

    taskForm.appendChild(checkBox);
    taskForm.appendChild(task_text);
    taskForm.appendChild(task_cross_button);

    task_container.appendChild(taskForm);

    search_bar.value = "";
}
