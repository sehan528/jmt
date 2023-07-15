export function delList() {
    const todoData = JSON.parse(localStorage.getItem("todoData")) || [];

    // 삭제할 항목의 인덱스를 추적하기 위한 변수
    let deleteIndices = [];

    const todoContainers = document.querySelectorAll(".todo-container");

    // 체크된 항목 필터링하여 삭제할 인덱스 추적
    todoContainers.forEach((container, index) => {
        const checkbox = container.querySelector("#todoCheck");
        if (checkbox.checked) {
            deleteIndices.push(index);
            container.remove();
        }
    });

    // 삭제할 인덱스를 기반으로 todoData 배열에서 해당 항목 제거
    for (let i = deleteIndices.length - 1; i >= 0; i--) {
        todoData.splice(deleteIndices[i], 1);
    }

    // 수정된 데이터를 다시 LocalStorage에 저장
    localStorage.setItem("todoData", JSON.stringify(todoData));
}
