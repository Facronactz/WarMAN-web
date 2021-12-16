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

var Cart = firebase.database().ref();
Cart.on('value', (snapshot) => {
  const data = snapshot.val();
  for (index in data) {
    vue.Menus.push(data[index].Menu);
  }
});

var vue = new Vue({
    el: '#main',
    data: {
        Cart: {
            
        },
        Menus: [],
        Menu_Name: {

        },
        Menu_Price: {

        },

        Total_Price: {

        },
        Total_Total: 0,
        // totalTotal: 0
    },
    created: function(){
        this.fetchCart();
        
        for(const id in this.Cart) {
            if(this.Cart[id] <= 0) {
                delete this.Cart[id];
            }
        }

        localStorage.Cart = JSON.stringify(this.Cart);
    },
    methods: {
        fetchCart: function(){
            var parseCrot = JSON.parse(localStorage.Cart)
            this.Cart = parseCrot;
            localStorage.removeItem('Total')
        },
        Show: function(Menus, Cart){
            var menu = Menus.find((Menu, _index) => Menu.id == Cart)
            // var arr = Object.entries(Cart)
            // var menu = arr.find((Menu, _index) => Menu.id == Menus.id)
            // this.Menu_Name = menu.Name;
            // this.Menu_Amount = this.Cart[Cart];
            // this.Menu_Price = menu.Price * this.Menu_Amount
            this.Menu_Name[menu.id] = menu.Name;
            this.Menu_Price[menu.id] = menu.Price;
            this.Total_Price[menu.id] = menu.Price * this.Cart[menu.id];
        },
        // StoreData: function(){
        //     // this.Total_Total += parseInt(this.Menu_Price);
        //     // console.log(parseInt(this.Menu_Price));
        // },
        remove: function(i){
            this.Cart[i] = 0;
            this.compPrice[i];
            // localSt,orage.Cart = this.Cart;
        },

        changeValue: function(id) {
            if(this.Cart[id] <= 0) {
                this.Cart[id] = 0;
                this.compPrice[id];
            }
        },

        updateValue: function(id, value) {
            this.Cart[id] += value
        }
        // Price: function(Amount){
        //     HarTot = this.Menu_Price*Amount;
        //     localStorage.Total = HarTot;
        //     // return HarTot;
        // }
        // addCart(id, element){
        //     var crot = localStorage.Cart;
        //     var parseCrot = JSON.parse(crot);
        //     parseCrot[id] = element.value;
        //     console.log(parseCrot);
        //     localStorage.Cart = JSON.stringify(parseCrot);
        // }
        // RIP
        // addCart(menu, amount) {
        //     if (typeof localStorage.Cart !== "undefined") {
        //         var crot = localStorage;
        //         var parseCrot = crot.Cart.split(",").map(function (x) { return x.split("_").map(Number) });
        //         var ada = 0;
        //         for (let index = 0; index < parseCrot.length; index++) {
        //             if (parseInt(menu) === parseCrot[index][0]) {
        //                 ada = index;
        //                 parseCrot[index][1] = amount;
        //                 let str = ""
        //                 var i = 0
        //                 for (i; i < parseCrot.length; ++i) {
        //                     str += parseCrot[i][0] + "_";
        //                     if (i === parseCrot.length - 1) {
        //                         str += parseCrot[i][1];
        //                     }
        //                     else
        //                         str += parseCrot[i][1] + ",";
        //                 }
        //                 crot.Cart = str;
        //                 break;
        //             } else if (parseCrot.length === index + 1) {
        //                 crot.Cart = "," + menu + "_" + amount;
        //             }
        //         }
        //         //   if (parseInt(menu) === parseCrot[ada][0]) {
        //         //     var item = parseCrot[ada][0];
        //         //     var jum = parseCrot[ada][1];
        //         //     jum++;
        //         //     crot.Cart = item + "_" + jum;
        //         //   } else {
        //         //     crot.Cart += "," + menu + "_" + 1;
        //         //   }
        //     } else {
        //         localStorage.Cart = menu + "_" + 1;
        //     }
        // },
    },
    computed: {
        compPrice:  {
            get: function() {
                // console.log("call");

                this.Total_Total = 0;
                for (const id in this.Total_Price) {
                    if(this.Cart[id] <= 0) {
                        this.Cart[id] = 0;
                    }
                    this.Total_Price[id] = this.Menu_Price[id] * this.Cart[id];
                    this.totalTotal = this.Total_Price[id]
                }

                localStorage.Cart = JSON.stringify(this.Cart);

                return this.Total_Price;
            }
        },
        totalTotal: {
            get: function() {
                this.Total_Total = 0;

                for (const id in this.Total_Price) {
                    if(this.Cart[id] <= 0) {
                        this.Cart[id] = 0;
                    }
                    this.Total_Total += this.Total_Price[id];
                }

                return this.Total_Total;
            },
            set: function(val) {
                this.Total_Total += val;
            }
        },
        // updateCart: function() {
        //     this.Total_Price = this.Menu_Amount * this.Menu_Price
        // },
    },

    watch: {
        Cart: function(val) {
            // console.log("Cart");
        }
    }

})