var vue = new Vue({
    el: '#app',
    data: {
        Cart: {
            
        },
        Menus: MenuDB,
        Menu_Name: '',
        Menu_Amount: 0
    },
    created: function(){
        this.fetchCart();
    },
    methods: {
        fetchCart: function(){
            var parseCrot = JSON.parse(localStorage.Cart)
            this.Cart = parseCrot;
        },
        Show: function(Menus, Cart){
            var menu = Menus.find((Menu, index) => Menu.id == Cart)
            this.Menu_Name = menu.Name;
            this.Menu_Amount = this.Cart[Cart];
        },
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
    }

})