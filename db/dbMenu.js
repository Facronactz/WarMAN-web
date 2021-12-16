var config = {
  apiKey: "AIzaSyDMgCNjuKv087Cxv7AfJExWiAvhgHeHtdg",
  authDomain: "warman-f2321.firebaseapp.com",
  databaseURL:"https://warman-f2321-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "warman-f2321",
  storageBucket: "warman-f2321.appspot.com",
  messagingSenderId: "236549924414",
  appId: "1:236549924414:web:6a90959b2c1dabf66b936f",
  measurementId: "G-83W5C2DH7C",
};

firebase.initializeApp(config);
var database = firebase.database();

var Menu = firebase.database().ref();
Menu.on('value', (snapshot) => {
  const data = snapshot.val();
  for (index in data) {
    if (data[index].id == localStorage.id){
      vue.DB = data[index].Menu;break;
    }
  }
});

var vue = new Vue({
  el: "#app",
  data: {
    Search: null,
    Restaurant: {
      id: localStorage.id,
    },
    DB: []
  },
  computed: {
    Menus(){
      if(this.Search){
        return this.DB.filter((item)=>{
          return this.Search.toLowerCase().split(' ').every(v => item.Name.toLowerCase().includes(v))
        })
      }
      else return this.DB;
    }
  },
  methods: {
    persist(index) {
      localStorage.Menu_id = index.id;
      localStorage.Menu_Name = index.Name;
      localStorage.Menu_Price = index.Price;
      localStorage.Menu_Desc = index.Desc;
      localStorage.Menu_Img = index.img;
    },
  },
});

