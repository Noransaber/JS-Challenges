let el = document.querySelector(".scroller");
console.log(el);

// to skip client hight
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  el.style.width = `${(scrollTop / height) * 100}%`;
});
