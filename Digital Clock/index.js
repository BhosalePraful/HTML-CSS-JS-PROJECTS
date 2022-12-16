function Clock() {
  let Hours = document.getElementById("Hours");
  let Minutes = document.getElementById("Minutes");
  let Seconds = document.getElementById("Second");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h >= 12) {
    ampm.innerText = "PM";
  } else "AM";

  Hours.innerText = h;
  Minutes.innerText = m;
  Seconds.innerHTML = s;

  setInterval(() => {
    Clock();
  }, 1000);
}
// Clock();
