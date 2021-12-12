function darkMode() {
  if (localStorage.dark) {
    localStorage.removeItem("dark");
  } else {
    localStorage.dark = true;
  }
  toogleDark();
}

function isdarkMode() {
  if (localStorage.dark) {
    toogleDark();
  }
}

function toogleDark() {
  var element = document.body;
  var c = document.getElementsByClassName("card");

  for (let index = 0; index < c.length; index++) {
    ["bg-dark" , "border-light", "border-dark"].map((v) =>
      c[index].classList.toggle(v)
    );
  }

  var nav = document.getElementById("nav").classList;
  //   element.classList.toggle("bg-dark text-white");
  ["bg-dark", "text-white"].map((v) => element.classList.toggle(v));
  ["bg-light", "navbar-light"].map((v) => nav.toggle(v));
  ["bg-dark", "navbar-dark"].map((v) => nav.toggle(v));

  var i = document.getElementById("i").classList;
  i.toggle("i-black");

  var botB = document.getElementById("botB").classList;
  ["bg-light", "navbar-light"].map((v) => botB.toggle(v));
  ["bg-dark", "navbar-dark"].map((v) => botB.toggle(v));

  var search = document.getElementsByClassName("form-control");
  for (let index = 0; index < search.length; index++) {
    ["bg-dark", "text-white"].map((v) =>
      search[index].classList.toggle(v))
    
  }
}
