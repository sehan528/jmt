import { runClock } from "./common/date.js";
import { initializeMap } from "./common/location.js";
// import { getCurrentLocation } from "./common/location.js";
import { openModal } from "./modal/backgroundSetting.js";
import { openCat } from "./modal/category.js";

import { initTodoList } from "./todolist/initUserlist.js";
import { genList } from "./todolist/genUserlist.js";
import { delList } from "./todolist/delUserlist.js";

import { initBookmark } from "./bookmark/initUserbookmark.js";
import { genBookmark } from "./bookmark/genUserbookmark.js";


// 무슨 버튼을 누를것인가?
const $bgBtn = document.getElementById("bgSettingButton");
const $catBtn = document.getElementById("categoryBtn");

const $delBtn = document.getElementById("delbutton");
const $getTodo = document.getElementById("innerTodo");

const $addBookmark = document.getElementById("add-bookmark");



// 이벤트 리스너
$bgBtn.addEventListener("click", openModal);
$catBtn.addEventListener("click", openCat);

initTodoList(); // 개선
const $todoInput = $getTodo.querySelector('#todoInput'); 
$todoInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if($todoInput.value.trim() === "") {
            alert("내용부터 입력하시오.");
        }
        else {
            genList($todoInput.value);
            $todoInput.value = "";
        }
    }  
});


// fav link
$delBtn.addEventListener("click", delList);

document.addEventListener("DOMContentLoaded", initBookmark);
$addBookmark.addEventListener("click", genBookmark);

runClock();
initializeMap();