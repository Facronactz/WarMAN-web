function darkMode() {

  if (localStorage.dark) {
    localStorage.removeItem('dark');
  }
  else {
    localStorage.setItem('dark', true);
  }

  var element = document.body;
  var c = document.getElementsByClassName("card")
  // c.push(document.getElementsByClassName("card-header"));
  // c.push(document.getElementsByClassName("card-body"));
  // c.push(document.getElementsByClassName("card-footer"));

  for (let index = 0; index < c.length; index++) {
    ["bg-dark", "text-white", "border-light", "border-dark"].map((v) => c[index].classList.toggle(v));
  }

  var nav = document.getElementById("nav").classList;
  //   element.classList.toggle("bg-dark text-white");
  ["bg-dark", "text-white"].map((v) => element.classList.toggle(v));
  ["bg-light", "navbar-light"].map((v) => nav.toggle(v));
  ["bg-dark", "navbar-dark"].map((v) => nav.toggle(v));
  
  var i = document.getElementById("i").classList;
  i.toggle("i-black");

}

function isdarkMode() {
  if (localStorage.dark) {
    var element = document.body;
    var c = document.getElementsByClassName("card")

    for (let index = 0; index < c.length; index++) {
      ["bg-dark", "text-white", "border-light", "border-dark"].map((v) => c[index].classList.toggle(v));
    }

    var nav = document.getElementById("nav").classList;
    //   element.classList.toggle("bg-dark text-white");
    ["bg-dark", "text-white"].map((v) => element.classList.toggle(v));
    ["bg-light", "navbar-light"].map((v) => nav.toggle(v));
    ["bg-dark", "navbar-dark"].map((v) => nav.toggle(v));
    var i = document.getElementById("i").classList;
    i.toggle("i-black");
  }
}