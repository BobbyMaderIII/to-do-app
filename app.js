function onReady() {
  let id = 0;


  let toDos = [];
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
      let deletebutton = document.createElement('button');
      deletebutton.innerHTML = "delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deletebutton);
      deletebutton.addEventListener('click', event => {
        event.preventDefault();
        deleteToDo(toDo.id);
        renderTheUI();
      });
    });
    console.log(toDos);
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

  window.onload = function () {
    onReady();
  };
