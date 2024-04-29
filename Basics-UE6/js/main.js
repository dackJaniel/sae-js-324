const todoContainer = document.querySelector(".all-todos");
const nameErr = document.querySelector("#name-err");
const contentErr = document.querySelector("#content-err");

let todos = [
  {
    id: 1,
    header: "First todo",
    content: "This is the first todo",
  },
  {
    id: 2,
    header: "Second todo",
    content: "This is the second todo",
  },
  {
    id: 3,
    header: "Third todo",
    content: "This is the third todo",
  },
];

function printTodos() {
  //   Array.from(todoContainer.childNodes).forEach((child) => {
  //     child.remove();
  //   });

  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    const toDoWrapper = document.createElement("div");
    toDoWrapper.classList.add("todo");
    toDoWrapper.id = `todo-${todo.id}`;

    const form = document.createElement("form");
    form.classList.add("editToDoForm");
    form.id = `edit-todo-${todo.id}`;
    form.addEventListener("submit", (e) => editTodoForm(e));

    // const header = document.createElement("h2");
    // header.innerText = todo.header;

    const header = document.createElement("input");
    header.type = "text";
    header.value = todo.header;

    // const content = document.createElement("p");
    // content.innerText = todo.content;

    const content = document.createElement("textarea");
    content.innerText = todo.content;

    // edit btn
    const editBtn = document.createElement("button");
    editBtn.type = "submit";
    editBtn.classList.add("edit");
    editBtn.innerText = "Edit";

    // del btn
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.id = `delete-todo-${todo.id}`;
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i> Löschen';
    deleteBtn.addEventListener("click", (e) => deleteTodo(e));

    form.appendChild(header);
    form.appendChild(content);
    form.appendChild(editBtn);
    toDoWrapper.appendChild(form);
    toDoWrapper.appendChild(deleteBtn);
    todoContainer.appendChild(toDoWrapper);
  });
}

printTodos();

function addTodo(e) {
  e.preventDefault();
  //   console.log("Form submitted");

  const currentId = todos.length;
  const toDoName = e.target[0].value;
  const toDoContent = e.target[1].value;

  //   form validation
  if (toDoName === "") {
    nameErr.innerText = "Please enter a todo name";
    return;
  }
  nameErr.innerText = "";

  if (toDoContent === "") {
    contentErr.innerText = "Please enter a todo content";
    return;
  }
  contentErr.innerText = "";

  todos.push({
    id: currentId + 1,
    header: toDoName,
    content: toDoContent,
  });

  printTodos();
}

function getId(idName) {
  return idName.split("-")[2];
}

function editTodoForm(e) {
  e.preventDefault();

  const todoId = getId(e.target.id);

  const header = e.target[0].value;
  const content = e.target[1].value;

  todos.forEach((todo) => {
    if (todo.id == todoId) {
      todo.header = header;
      todo.content = content;
    }
  });

  printTodos();
}

function deleteTodo(e) {
  const todoId = getId(e.target.id);

  todos.forEach((todo, idx) => {
    // console.log(todo, idx);
    if (todo.id == todoId) {
      todos.splice(idx, 1);
    }
  });

  printTodos();
}

const form = document.querySelector(".newToDo");
form.addEventListener("submit", (e) => addTodo(e));
