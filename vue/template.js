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
      <a class="btn btn-primary col-auto active" href="index.html"><i class="fas fa-book-open"></i></a>
      <a class="btn btn-primary col-auto" href="cart.html"><i class="fas fa-shopping-cart"></i></a>
      <a class="btn btn-primary col-auto" href="about.html"><i class="fas fa-info-circle"></i></a>
    </div>
  </nav>
  `
})

Vue.component('nav-bottom2', {
  template: `
  <nav id="botB" class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="row g-0 w-100 btn-group">
      <a class="btn btn-primary col-auto" href="index.html"><i class="fas fa-book-open"></i></a>
      <a class="btn btn-primary col-auto active" href="cart.html"><i class="fas fa-shopping-cart"></i></a>
      <a class="btn btn-primary col-auto" href="about.html"><i class="fas fa-info-circle"></i></a>
    </div>
  </nav>
  `
})

Vue.component('nav-bottom3', {
  template: `
  <nav id="botB" class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="row g-0 w-100 btn-group">
      <a class="btn btn-primary col-auto" href="index.html"><i class="fas fa-book-open"></i></a>
      <a class="btn btn-primary col-auto" href="cart.html"><i class="fas fa-shopping-cart"></i></a>
      <a class="btn btn-primary col-auto active" href="about.html"><i class="fas fa-info-circle"></i></a>
    </div>
  </nav>
  `
})

Vue.component('nav-back', {
  template: `
  <nav id="nav" class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid p-0">
          <a class="navbar-brand" onclick="history.go(-1)" style="cursor: pointer"><i class="fa fa-chevron-left" aria-hidden="true"> Back</i></a>
          <button onclick="darkMode()" class="btn">
              <i id="i" class="fas fa-adjust"></i>
          </button>
      </div>
  </nav>
  `
})

Vue.component('loading-div',{
  template:
  `
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
      <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  `
})

Vue.component('icon-preload',{
  template:
  `
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
  </svg>
  `
})

new Vue({
  el: '#navT'
})

new Vue({
  el: '#navB'
})

new Vue({
  el: '#loading'
})

new Vue({
  el: '#preload'
})