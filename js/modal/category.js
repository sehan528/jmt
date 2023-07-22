let $catModal;

export function openCat() {
    generateCatModal();
    settingEvent();
}

function generateCatModal() {
    const $modalContainer = document.getElementById("modalContainer");
    // 모달 템플릿 보관
    const $gbTemplate = document.getElementById("catSettingModalTemplate");
    const modalHtml = $gbTemplate.innerHTML;

    $modalContainer.insertAdjacentHTML("beforeend", modalHtml);
    $catModal = document.getElementById("catSettingModal");
}

function settingEvent() {
    // 요소들 선언
    const $blackBg = $catModal.querySelector(".dimmer-bg");
    const $whiteBg = $catModal.querySelector(".black-bg");

    $whiteBg.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // 이벤트 세팅
    $blackBg.addEventListener("click", (e) => {
        if (confirm("창을 닫겠습니까?")) {
            $catModal.remove();
        }
    });
}

