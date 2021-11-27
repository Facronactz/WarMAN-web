var vue = new Vue({
    el: "#main",
    data: {
        Menu: {
            id: localStorage.Menu_id,
            Name: localStorage.Menu_Name,
            Price: localStorage.Menu_Price,
            Img: localStorage.Menu_Img,
            Desc: localStorage.Menu_Desc,
        }
    },
    methods: {
        // printArr: function (arr) {
        //     let str = "";
        //     for (let item of arr) {
        //         if (Array.isArray(item)) str += this.printArr(item);
        //         if (condition) {

        //         }
        //         else str += item + "_";
        //     }
        //     return str;
        // },
        addCart(menu) {
            if (typeof localStorage.Cart !== 'undefined') {
                var item = JSON.parse(localStorage.Cart);
                if (item[menu]) {
                    item[menu] += 1
                }
                else {
                    item[menu] = 1
                }
                localStorage.Cart = JSON.stringify(item);
            }
            else {
                var obj = {};
                obj[menu] = 1;
                localStorage.Cart = JSON.stringify(obj)
            }
        }
    }
    //  RIP
    //     if (typeof localStorage.Cart !== "undefined") {
    //         var crot = localStorage;
    //         var parseCrot = crot.Cart.split(",").map(function (x) { return x.split("_").map(Number) });
    //         var ada = 0;
    //         for (let index = 0; index < parseCrot.length; index++) {
    //             if (parseInt(menu) === parseCrot[index][0]) {
    //                 ada = index;
    //                 parseCrot[index][1] += 1;
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
    //                 crot.Cart += "," + menu + "_" + 1;
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
    // },
});

// function showCart(){
//     var parseCrot = LocalStorage.Cart.split(",").map(function (x) { return x.split("_").map(Number)});
// }