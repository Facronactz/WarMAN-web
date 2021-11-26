Vue.component('nav-bar', {
  template: `
  <nav id="nav" class="navbar navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
      <a class="navbar-brand">WarMAN</a>
      <button onclick="darkMode()" class="btn">
          <i id="i" class="fas fa-adjust"></i>
      </button>
    </div>
  </nav>
  `
})

new Vue({
  el: '#navB'
})