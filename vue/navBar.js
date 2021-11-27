Vue.component('nav-top', {
  template: `
  <nav id="nav" class="navbar navbar-expand-sm navbar-light bg-light">
    <div div class="container-fluid">
      <a class="navbar-brand">WarMAN</a>
      <button onclick="darkMode()" class="btn">
          <i id="i" class="fas fa-adjust"></i>
      </button>
    </div>
  </nav>
  `
})

Vue.component('nav-bottom', {
  template: `
  <nav id="botB" class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="row g-0 w-100 btn-group">
      <a class="btn btn-primary col-auto active"><i class="fas fa-book-open"></i></a>
      <a class="btn btn-primary col-auto" href="cart.html"><i class="fas fa-shopping-cart"></i></a>
    </div>
  </nav>
  `
})

Vue.component('nav-bottom2', {
  template: `
  <nav id="botB" class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="row g-0 w-100 btn-group">
      <a class="btn btn-primary col-auto" href="index.html"><i class="fas fa-book-open"></i></a>
      <a class="btn btn-primary col-auto active"><i class="fas fa-shopping-cart"></i></a>
    </div>
  </nav>
  `
})

Vue.component('nav-back', {
  template: `
  <nav id="nav" class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><i class="fa fa-chevron-left" aria-hidden="true"> Back</i></a>
          <button onclick="darkMode()" class="btn">
              <i id="i" class="fas fa-adjust"></i>
          </button>
      </div>
  </nav>
  `
})

new Vue({
  el: '#navT'
})

new Vue({
  el: '#navB'
})