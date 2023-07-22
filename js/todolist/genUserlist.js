const todoData = JSON.parse(localStorage.getItem("todoData")) || [];
const todoInnerWrap = document.querySelector(".todo-inner-wrap");

export function genList(value) {
    generateTODOHTML(value);
}

function generateTODOHTML(value) {
    // TODO: 빈값은 인풋 안되게 validation check
    // TODO: checked 쓸모 없으니 지우기

    // 저장할 때 아래의 id 코드를 넣는다.
    const todoId = `todo-${Date.now()}`;

    const newTodoContainer = document.createElement("div");
    newTodoContainer.classList.add("todo-container");
    newTodoContainer.setAttribute("data-id", todoId);

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
        postID: todoId,
    };

    // 배열에 저장
    todoData.push(todoItem);

    // 배열을 LocalStorage에 저장
    localStorage.setItem("todoData", JSON.stringify(todoData));

    // TODO: 저장되면 인풋창 내용 비우기
}