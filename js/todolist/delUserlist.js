export function delList() {
    const todoData = JSON.parse(localStorage.getItem("todoData")) || [];
    const $todoContainers = document.querySelectorAll(".todo-container");

    // 체크된 항목 필터링하여 삭제할 인덱스 추적
    $todoContainers.forEach((container, index) => {
        console.log(container);
        const getCheckbox = container.querySelector(".todo-check");
        const getPostId = container.getAttribute("data-id");

        if (getCheckbox.checked) {
            console.log(getPostId + `에 해당하는 체크박스가 선택되었습니다.`);
            const postIndex = todoData.findIndex((lookIdx) => lookIdx.postID === getPostId);
            console.log(postIndex);
            todoData.splice(postIndex, 1);
            container.remove();
        } else {
            console.log(getPostId + `에 해당하는 체크박스가 선택되지 않았습니다.`);
        }
    });
    // 수정된 데이터를 다시 LocalStorage에 저장
    localStorage.setItem("todoData", JSON.stringify(todoData));
}
