let loading = document.getElementById("loading");
let dark = localStorage.dark;
if (dark) {
  let div = document.querySelectorAll(".lds-ellipsis div");
  div.forEach((element) => {
    element.style.backgroundColor = "white";
  });
  loading.style.backgroundColor = "black";
}
window.addEventListener("load", function () {
  setTimeout(function () {loading.remove();}, 0);
  // loading.remove();
});