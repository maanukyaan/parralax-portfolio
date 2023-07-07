document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.01}deg;
            --move-y: ${(e.clientY - window.innerWidth / 2) * -0.01}deg;
        `,
  });
});

const innerCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

const elems = document.querySelectorAll(".custom-hover");

elems.forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });

  elem.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});