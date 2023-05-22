export function dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.target.style = "opacity: 0.3;";
}

export function dragOver(e) {
  e.preventDefault();
  if (e.target.classList.contains("taskList")) {
    e.target.style.border = "2px dashed white"; // Aplicamos el borde al elemento objetivo
  }
}

export function dragLeave(e) {
  e.preventDefault();
  if (e.target.classList.contains("taskList")) {
    e.target.style.border = "none"; // Eliminamos el borde en el elemento objetivo
  }
}

export function drop(e) {
  dragLeave(e);
  e.preventDefault();

  let sourceElemData = e.dataTransfer.getData("text");
  let sourceElemId = document.getElementById(sourceElemData);
  sourceElemId.style = "opacity: 1;";

  // Comprueba si el elemento donde se suelta el elemento arrastrado es una lista de tareas
  if (e.target.closest(".taskList")) {
    let targetElemId = e.target.closest(".taskList").id;
    if (targetElemId === "todoList") {
      console.log('todo');
      sourceElemId.style = "color: rgba(250, 128, 114, 0.8) !important;";
    } else if (targetElemId === "doingList") {
      console.log('doing');
      sourceElemId.style = "color: rgba(244, 164, 96, 0.8) !important;";
    } else if (targetElemId === "doneList") {
      console.log('done');
      sourceElemId.style = "color: rgba(0, 100, 0, 0.8) !important;";
    } else {
      console.log('else');
      // sourceElemId.style = "color:#b0b8bf;";
    }

    // Mueve el elemento arrastrado a la lista de tareas correspondiente
    document.getElementById(targetElemId).appendChild(sourceElemId);
  } else {
    // No se permite soltar el elemento arrastrado en este lugar
    console.log("No puedes soltar aquí.");
  }
}
