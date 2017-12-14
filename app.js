function onReady() {
  fetchToDos();
  let id = 0;


  var toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id,
    });
    newToDoText.value = '';

    renderTheUI();
  }
  function deleteToDo(id) {
    toDos = toDos.filter(toDo => toDo.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;
      let deletebutton = document.createElement('button');
      deletebutton.innerHTML = "delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deletebutton);

      checkbox.addEventListener('change', event => {
        event.preventDefault();
        toDo.complete = checkbox.checked;
        savetoDos();
        console.log(JSON.stringify(toDos, null, 4));
      });
      deletebutton.addEventListener('click', event => {
        event.preventDefault();
        deleteToDo(toDo.id);
        savetoDos();
        renderTheUI();
        console.log(JSON.stringify(toDos, null, 4));
      });
    });
    console.log(JSON.stringify(toDos, null, 4));
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    savetoDos();
  });
  function savetoDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }
  function fetchToDos() {
    toDos = JSON.parse(localStorage.getItem("toDos"));
  }
  renderTheUI();
}

  window.onload = function () {
    onReady();
  };
