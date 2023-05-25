import * as dragdrop from "./DragDrop.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  var addTaskBtn = document.getElementById("addTask");
  addTaskBtn.addEventListener("click", addTask);

  //Añadimos el "enter" para introducir tareas
  var taskName = document.getElementById("newTask");
  taskName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTaskBtn.click();
    }
  });

  //eliminar tareas
  document.querySelector("#todoList").addEventListener("click", deleteTask);
  document.querySelector("#doingList").addEventListener("click", deleteTask);
  document.querySelector("#doneList").addEventListener("click", deleteTask);

  //LISTAS
  var todoList = document.querySelector("#todoList");
  addDragDrop(todoList);

  var doingList = document.querySelector("#doingList");
  addDragDrop(doingList);

  var doneList = document.querySelector("#doneList");
  addDragDrop(doneList);

  var pomodoroTimers = document.getElementById("startPomodoro");
  pomodoroTimers.addEventListener("click", startTimer);
  function startTimer() {
    pomodoroTimer(25, 5, 4);
  }

  var pomodoro = document.getElementById("pomodoro");
  var cycle = 0;

  function startTimer() {
    cycle = 0;
    pomodoroTimer(25, 5, 4);
  }

  function pomodoroTimer(workTime, breakTime, cycles) {
    if (cycle < cycles) {
      cycle++;
      pomodoro.innerHTML = "Cycle " + cycle;
      pomodoro.innerHTML += "<br>Work time starts now!";
      setTimeout(() => {
        pomodoro.innerHTML += "<br>Work time is over!<br>Take a break!";
        setTimeout(() => {
          pomodoro.innerHTML += "<br>Break time is over!";
          pomodoroTimer(workTime, breakTime, cycles); // Llama a la función recursivamente para iniciar el siguiente ciclo
        }, breakTime * 60 * 1000); // Multiplica por 60 y 1000 para convertir a minutos
      }, workTime * 60 * 1000); // Multiplica por 60 y 1000 para convertir a minutos
    }
    document.getElementById('pomodoro').style = "width: fit-content; margin: 1em; padding: 1em; border: 0.1em solid #b0b8bf; border-radius: 1em; background-color: #1a3651; color: #b0b8bf;";
  }

}

//ADD DRAG AND DROP LISTS
function addDragDrop(list) {
  list.addEventListener("dragover", dragdrop.dragOver);
  list.addEventListener("dragleave", dragdrop.dragLeave);
  list.addEventListener("drop", dragdrop.drop);
}

//inicializamos el ID para las tareas, para mover la que queremos
var id = 0;
//añadimos la tarea
function addTask() {
  if (document.querySelector("#newTask").value.length == 0) {
    alert("Please enter a task");
  } else {
    document.querySelector("#todoList").innerHTML +=
      `<div id="cardtask` +
      id +
      `" class="card mb-3" data-id="task" draggable="true" style="color: rgba(250, 128, 114, 0.8);">
            <div class="task d-flex justify-content-between align-items-center m-2">
                <li id="taskname" class="list-group-item text-center flex-grow-1">
                    ` +
      document.querySelector("#newTask").value +
      `</li>
                <button type="button" class="btn btn-outline-danger ms-3" id="delete">
                    <i class="fa-solid fa-trash-can" id="delete"></i>
                </button>
            </div>
        </div>`;
  }
  id++;
  document.getElementById("newTask").value = "";
}

//variable DRAG & DROP
var tasks = document.querySelectorAll(".card");

//DRAG AND DROP TASKS
tasks.forEach(function (task) {
  task.addEventListener("dragstart", dragdrop.dragStart);
  task.addEventListener("dragleave", dragdrop.dragLeave);
});

//ELIMINAR TASKS
function deleteTask(event) {
  console.log("click");
  if (event.target.id == "delete") {
    event.target.closest(".card").remove();
  }
}
