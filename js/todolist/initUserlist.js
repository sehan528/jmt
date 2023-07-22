// export function initList() {
//     // 이전에 저장된 todoData 배열을 불러옵니다.
//     let todoData = JSON.parse(localStorage.getItem("todoData")) || [];
//     let $todoInnerWrap = document.querySelector(".todo-inner-wrap");

//     todoData.forEach((item) => {
//         const newTodoContainer = document.createElement("div");
//         newTodoContainer.classList.add("todo-container");

//         const emptyDiv = document.createElement("div");
//         newTodoContainer.appendChild(emptyDiv);

//         const todoContext = document.createElement("div");
//         todoContext.id = "todoContext";
//         todoContext.textContent = item.context;
//         newTodoContainer.appendChild(todoContext);

//         const todoCheck = document.createElement("input");
//         todoCheck.id = "todoCheck";
//         todoCheck.classList.add("todo-check");
//         todoCheck.type = "checkbox";
//         todoCheck.checked = item.checked;
//         newTodoContainer.appendChild(todoCheck);

//         $todoInnerWrap.appendChild(newTodoContainer);
//     });
// }

export function initTodoList() {
    const $todoInnerWrap = document.querySelector(".todo-inner-wrap");
    const $todoItemTemplate = document.getElementById("todoTemplate");
    const todoData = JSON.parse(localStorage.getItem("todoData")) || [];
    
    todoData.forEach(({context, postID}) => {
        // 앝은 복사 vs 깊은 복사
        const $todoItemContent = document.importNode($todoItemTemplate.content, true);
        $todoItemContent.querySelector(".js-todo-context").textContent = context;

        const $todoPostID = $todoItemContent.querySelector(".todo-container");
        $todoPostID.setAttribute("data-id", postID);

        $todoInnerWrap.appendChild($todoItemContent);
    });
}

