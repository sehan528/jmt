const todoData = JSON.parse(localStorage.getItem("todoData")) || [];
const todoInnerWrap = document.querySelector(".todo-inner-wrap");

export function genList(value) {
    generateTODOHTML(value);
}

function generateTODOHTML(value) {
    const newTodoContainer = document.createElement("div");
    newTodoContainer.classList.add("todo-container");

    const emptyDiv = document.createElement("div");
    newTodoContainer.appendChild(emptyDiv);

    const todoContext = document.createElement("div");
    todoContext.id = "todoContext";
    todoContext.textContent = value;
    newTodoContainer.appendChild(todoContext);

    const todoCheck = document.createElement("input");
    todoCheck.id = "todoCheck";
    todoCheck.classList.add("todo-check");
    todoCheck.type = "checkbox";
    newTodoContainer.appendChild(todoCheck);

    todoInnerWrap.appendChild(newTodoContainer);

    // 추출한 데이터를 객체로 저장
    const todoItem = {
        context: value,
        checked: false,
    };

    // 배열에 저장
    todoData.push(todoItem);

    // 배열을 LocalStorage에 저장
    localStorage.setItem("todoData", JSON.stringify(todoData));
}