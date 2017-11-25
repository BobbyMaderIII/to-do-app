let id = 0;

function onReady() {

const toDos = [];
const addToDoForm = document.getElementById('addToDoForm');

function createNewToDo() {
  const newToDoText = document.getElementById('newToDoText');
  for (let i = 0; i <toDos.length; i++)
  if (!newToDoText.value) { return; }

  toDos.push({
    title: newToDoText.value,
    complete: false
    id:
    });
  newToDoText.value = '';

  renderTheUI();
}

function renderTheUI() {
   const toDoList = document.getElementById('toDoList');

toDoList.textContent = '';

   toDos.forEach(function(toDo) {
     const newLi = document.createElement('li');
     const checkbox = document.createElement('input');
     checkbox.type = "checkbox";
     let delete = document.createElement('delete');


     newLi.textContent = toDo.title;

     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
     newLi.appendChild(delete);
  });
}
  del.addEventListener(delete);

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function () {
  onReady();
};
