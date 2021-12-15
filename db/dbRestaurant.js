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

var RestaurantDB = firebase.database().ref();
RestaurantDB.on('value', (snapshot) => {
  const data = snapshot.val();
  // console.log(data);
  vue.DB = data;
});

// var json;
// fetch("db/db.json")
// .then(response => {
//    return response.json();
// })
// .then(data => json = data);

var vue = new Vue({
  el: "#main",
  data: {
    Search: null,
    DB: [

    ],
  },
  // created: function () {
  //   if (this.DB.length == 0) {
  //     this.DB = json
  //   }
  // },
  computed: {
    Restaurant() {
      if (this.Search) {
        return this.DB.filter((item) => {
          return this.Search.toLowerCase()
            .split(" ")
            .every(
              (v) =>
                item.Name.toLowerCase().includes(v) ||
                item.Loc.toLowerCase().includes(v)
            );
        });
      } else return this.DB;
    },
  },
  methods: {
    persist(index) {
      localStorage.id = index.id;
      localStorage.Name = index.Name;
      localStorage.Jam = index.Jam;
      localStorage.Loc = index.Loc;
      localStorage.Desc = index.Desc;
      localStorage.Img = index.img;
    },
  },
});
