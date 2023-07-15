// 있다 찾아봐야할것: 
// import list들 중에서 하나라도 GET request에 실패하면 localstorage를 불러오지 않는 현상을 관찰함.
// 왜 그렇게 되는지 작동 순서를 한번 더 살펴보자.


// index.js
import { openModal } from "./modal/backgroundSetting.js";
import { openCat } from "./modal/category.js";

import { initList } from "./todolist/initUserlist.js";
import { genList } from "./todolist/genUserlist.js";
import { delList } from "./todolist/delUserlist.js";

import { initBookmark } from "./bookmark/initUserbookmark.js";
import { genBookmark } from "./bookmark/genUserbookmark.js";





// 무슨 버튼을 누를것인가?
const $bgBtn = document.getElementById("bgSettingButton");
const $catBtn = document.getElementById("categoryBtn");
const $delBtn = document.getElementById("delbutton");

const $getTodo = document.getElementById("innertodo");

const $addBookmark = document.getElementById("add-bookmark");



// 이벤트 리스너

$bgBtn.addEventListener("click", openModal);
$catBtn.addEventListener("click", openCat);

// todo-list
document.addEventListener("DOMContentLoaded", initList);

const textInput = $getTodo.querySelector('input'); // 반드시 개선해둘것.
textInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        genList(textInput.value);
    }
});

// fav link
$delBtn.addEventListener("click", delList);

document.addEventListener("DOMContentLoaded", initBookmark);
$addBookmark.addEventListener("click", genBookmark)


