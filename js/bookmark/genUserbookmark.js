// 생각해보니 이거 모달인데 있다 생각좀.


let $bookmarkModal;
let bookmarkData = JSON.parse(localStorage.getItem("bookmarkData")) || [];


export function genBookmark() {
    generateBookmarkModal();
    settingEvent();
    uploadMyBookmark();
}

function generateBookmarkModal() {
    const $modalContainer = document.getElementById("modalContainer");
    // 모달 템플릿 보관
    const $gbTemplate = document.getElementById("favoriteLinkModalTemplate");
    const modalHtml = $gbTemplate.innerHTML;


    $modalContainer.insertAdjacentHTML("beforeend", modalHtml);
    $bookmarkModal = document.getElementById("favoriteModel");
}

function settingEvent() {
    // 요소들 선언
    const $blackBg = $bookmarkModal.querySelector(".black-bg");
    const $whiteBg = $bookmarkModal.querySelector(".white-bg");
    const $exitBtn = $bookmarkModal.querySelector(".cancel");


    $whiteBg.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    $blackBg.addEventListener("click", closeModal);
    $exitBtn.addEventListener("click", closeModal);

    function closeModal() {
        if (confirm("창을 닫겠습니까?")) {
            $bookmarkModal.remove();
        }
    }
}

function uploadMyBookmark() {
    const $submitBtn = $bookmarkModal.querySelector(".submit");

    document.addEventListener("keydown", handleKeyPress);
    $submitBtn.addEventListener("click", handleKeyPress);

    function handleKeyPress(e) {
        if (e.key === "Enter" || e.target === $submitBtn) {
            const $markName = $bookmarkModal.querySelector(".bookmark-name");
            const $markURL = $bookmarkModal.querySelector(".bookmark-url");

            if (bookmarkData.length >= 5) {
                alert("최대 길이를 초과했습니다.");
                return;
            }

            const bookItem = {
                Name: $markName.value,
                URL: $markURL.value,
            };
            bookmarkData.push(bookItem);
            localStorage.setItem("bookmarkData", JSON.stringify(bookmarkData));
            location.reload();
        }
    }
}
