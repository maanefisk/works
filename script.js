var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

function changepage(theclicked) {
  let alltabsactive = document.querySelectorAll(".isactive");
  for (let tabactive of alltabsactive) {
    tabactive.classList.remove("isactive");
  }

  theclicked.classList.add("isactive");

  var pagename = theclicked.innerText;
  model.page = pagename;
  localStorage.setItem("model", pagename);

  updateView();
}
