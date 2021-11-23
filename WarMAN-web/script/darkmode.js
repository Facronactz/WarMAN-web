function darkMode() {
  var element = document.body;
  var card = document.getElementById("card").classList;
  var nav = document.getElementById("nav").classList;
  //   element.classList.toggle("bg-dark text-white");
  ["bg-dark", "text-white"].map((v) => element.classList.toggle(v));
  ["bg-light", "navbar-light"].map((v) => nav.toggle(v));
  ["bg-dark", "navbar-dark"].map((v) => nav.toggle(v));
  card.toggle("border-dark");
  ["bg-dark", "text-white", "border-light"].map((v) => card.toggle(v));
}
