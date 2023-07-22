const $date = document.getElementById("date");

function runClock() {
  setInterval(() => {
    const currentTime = getCurrentTime();
    $date.innerText = currentTime;
  }, 1000); // Update the time every second
}

function getCurrentTime() {
  const currentDate = new Date();

  const koreanFormat = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return koreanFormat.format(currentDate);
}

export { runClock };
