document.addEventListener("DOMContentLoaded", () => {
  let comp = [];
  let user = [];
  let level = 0;
  let start = false;
  let max = 0;
  let h3 = document.querySelector("h3");

  document.addEventListener("keypress", () => {
    if (start == false) {
      alert("Game has been started!");
      levelup();
    }
  });

  document.getElementById("heading").addEventListener("click", function () {
    if (start == false) {
      alert("Game has been started!");
      levelup();
    }
  });

  function levelup() {
    level++;
    h3.innerText = `LEVEL ${level}  SCORE ${(level - 1) * 5} HIGH SCORE ${max}`;
    start = true;
    user = [];

    let col = Math.floor(Math.random() * 4) + 1;
    let ranbtn = document.querySelector(`#color${col}`);
    comp.push(`color${col}`);

    blink(ranbtn);
  }

  function blink(e) {
    e.classList.add("blink");
    setTimeout(() => {
      e.classList.remove("blink");
    }, 150);
  }

  let els = document.querySelectorAll(".el");
  for (let ele of els) {
    ele.addEventListener("click", function () {
      blink(ele);
      if (start == true) {
        check(ele);
      }
    });
  }

  function check(ele) {
    user.push(ele.getAttribute("id"));
    let indx = user.length - 1;

    if (comp[indx] === user[indx]) {
      if (user.length == comp.length) {
        setTimeout(levelup, 500);
      }
    } else {
      h3.innerText = `Game over. Your score is ${(level - 1) * 5}. Press any key to restart.`;
      reset();
    }
  }

  function reset() {
    comp = [];
    user = [];
    max = Math.max(max, (level - 1) * 5);
    level = 0;
    start = false;

    let bdy = document.querySelector("body");
    bdy.classList.add("over");
    setTimeout(() => {
      bdy.classList.remove("over");
    }, 300);
  }
});