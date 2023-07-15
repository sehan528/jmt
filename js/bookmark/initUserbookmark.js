const bookmarkData = JSON.parse(localStorage.getItem("bookmarkData")) || [];
const bookmarkWrap = document.querySelector(".bookmark-wrap");

export function initBookmark() {
    generateBookmark();
    clickBookmark();
}

function generateBookmark() {
    bookmarkData.forEach((bookmark) => {
        const { Name, URL } = bookmark;

        const newIconContainer = document.createElement("div");
        newIconContainer.classList.add("icon-container");

        const iconImage = document.createElement("img");
        iconImage.src = "https://w7.pngwing.com/pngs/629/162/png-transparent-computer-icons-x-mark-symbol-miscellaneous-angle-desktop-wallpaper-thumbnail.png";
        iconImage.classList.add("box");

        const placeholderImage = document.createElement("img");
        placeholderImage.src = "https://via.placeholder.com/600";
        placeholderImage.classList.add("imgsize");

        const iconName = document.createElement("div");
        iconName.classList.add("icon-name");
        iconName.textContent = Name;

        const bookmarkURL = document.createElement("div");
        bookmarkURL.classList.add("myBookmark-url");
        bookmarkURL.textContent = URL;

        newIconContainer.appendChild(iconImage);
        newIconContainer.appendChild(placeholderImage);
        newIconContainer.appendChild(iconName);
        newIconContainer.appendChild(bookmarkURL);

        // https://developer.mozilla.org/ko/docs/Web/API/Node/insertBefore
        bookmarkWrap.insertBefore(newIconContainer, document.getElementById("add-bookmark"));
    });
}

function clickBookmark() {
    bookmarkWrap.addEventListener("click", (e) => {
        const clickedContainer = e.target.closest(".icon-container");
        const clickedBox = e.target.closest(".box");

        if (clickedContainer && !clickedBox)  {
            const bookmarkURL = clickedContainer.querySelector(".myBookmark-url");
            if (bookmarkURL) {
                const url = bookmarkURL.textContent;
                window.location.href = url;
            }
        }

        if (clickedBox) {
            const bookmarkIndex = Array.from(bookmarkWrap.children).indexOf(clickedContainer);
            if (bookmarkIndex > -1) {
                bookmarkData.splice(bookmarkIndex, 1);
                localStorage.setItem("bookmarkData", JSON.stringify(bookmarkData));
                clickedContainer.remove();
                location.reload();
            }
        }
    });
}


