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
    const $blackBg = $bookmarkModal.querySelector(".dimmer-bg");
    const $whiteBg = $bookmarkModal.querySelector(".black-bg");
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

    $bookmarkModal.addEventListener("keydown", handleKeyPress);
    $submitBtn.addEventListener("click", handleKeyPress);

    function handleKeyPress(e) {
        if (e.key === "Enter" || e.target === $submitBtn) {
            const $markName = $bookmarkModal.querySelector(".bookmark-name");
            const $markURL = $bookmarkModal.querySelector(".bookmark-url");

            if (bookmarkData.length >= 5) {
                alert("최대 길이를 초과했습니다.");
                return;
            }

            if ($markName.value.trim() === "" || $markURL.value.trim() === "") {
                alert("양식을 올바르게 작성하십시오.");
                return;
            }
            
            // 
            // url 검사
            if (!/https?:\/\//g.test($markURL.value)) $markURL.value = `http://${$markURL.value}`;
            if (!/https?:\/\/.+?\..{2,}/g.test($markURL.value)) {
                alert("url 제대로 적으세요.");
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
