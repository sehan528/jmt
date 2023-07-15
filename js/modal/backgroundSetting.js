let $bgModal;


export function openModal() {
  generateBgModal();
  settingEvent();
}

/**
 * 배경 설정 모달을 화면에 생성하는 함수.
 */
function generateBgModal() {
  const $modalContainer = document.getElementById("modalContainer");
  // 모달 템플릿 보관
  const $gbTemplate = document.getElementById("bgSettingModalTemplate");
  const modalHtml = $gbTemplate.innerHTML;

  // https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
  // beforebegin : $modalContainer 의 앞에
  // afterend: $modalContainer 의 뒤에
  // afterbegin: $modalContainer 안의 첫번째
  // beforeend: $modalContainer 안의 마지막
  $modalContainer.insertAdjacentHTML("beforeend", modalHtml);
  $bgModal = document.getElementById("bgSettingModal");
}

/**
 * 모달 이벤트 세팅 함수
 */
function settingEvent() {
  // 요소들 선언
  const $blackBg = $bgModal.querySelector(".js-black-bg");
  const $whiteBg = $bgModal.querySelector(".white-bg");

  // console.log($blackBg);
  // console.log($whiteBg);


  $whiteBg.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // 이벤트 세팅
  $blackBg.addEventListener("click", (e) => {
    // Q3. js-black-bg위에 white-bg를 누르면 해당 confirm이 안나오게 할려면? 
    if (confirm("창을 닫겠습니까?")) {
      $bgModal.remove();
    }
  });

  // 배경화면 클릭 이벤트
  // 1. 클릭하면 "이 배경화면으로 설정하시겠습니까?"
  // 2. 예 => alert("~번 배경으로 변경 되었습니다.") => 창 닫기.
  // 3. 아니오 => 아무 동작 없음.


  const $iconContainers = $bgModal.querySelectorAll(".icon-container");

  $iconContainers.forEach((changeImg, idx) => {
    changeImg.addEventListener("click", function(e) {
      // Q1. 여기서 changeImg 는 $iconContainers의 idx에 자동 참조하는게 정확한 표현일까요?
      e.stopPropagation();
      // Q2. stopPropagation을 실행하면 해당 이벤트리스너에 있는 익명 함수만 강제로 look at 하고 빠져나가는것이 옳습니까?

      // 대충 사진 선택
  
      if(confirm("이 배경화면으로 설정하시겠습니까?")) {
        alert( (idx+1) + "번 배경으로 " + "변경 되었습니다.")
        $bgModal.remove();
      }
    });
  })
}