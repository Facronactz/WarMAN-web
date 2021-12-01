var vue = new Vue({
  el: "#main",
  data: {
    Search: null,
    DB: [
      {
        id: 1,
        Name: "Kediri Cafe",
        Jam: "7 am - 9 pm, Sen-Jum",
        Loc: "Kediri",
        Desc: "Bagi kaum mileial ber-plat AG dan sekitarnya. yuk cobain Kediri Cafe, tenpat ngumpul dan seru-seruan bareng temanmaupun keluarga.",
        img: "https://cache.marriott.com/marriottassets/marriott/MOWLC/mowlc-beluga-restaurant-6102-hor-clsc.jpg",
      },
      {
        id: 2,
        Name: "Warung Tegal",
        Jam: "10 am - 10 pm, Sen-Min",
        Loc: "Jombang",
        Desc: 'Mengusung tema dan prinsip: "Menyediakan makanan versi kuli yang murmer". Warung tegal hadir dengan prinsip yang berani yang hadir mengatasi masalah konsumen menengah bawah',
        img: "https://th.bing.com/th/id/OIP.AjdojgixYd5uw6jCVosVcgAAAA?pid=ImgDet&w=400&h=267&rs=1",
      },
      {
        id: 3,
        Name: "Warkop Pak Pri",
        Jam: "8 am - 5 pm, Sen-Min",
        Loc: "Nganjuk",
        Desc: "Berdri sejak WWII warung bersejarah milik pak Pri ternyata mempunyai makanan khas yang tetap dipertahankan rasa dan kualitasnya. Penasaran ? langsung cuss ke warung pak Pri.",
        img: "https://i.pinimg.com/736x/bf/36/5c/bf365cd7e3e8858aa4d340200667f953.jpg",
      },
      {
        id: 4,
        Name: "Warkop Pak Pri - Cabang Pojok",
        Jam: "8 am - 5 pm, Sen-Min",
        Loc: "Madiun",
        Desc: "Warung pak Pri kini buka cabang lo, nikmati setiap rasa khas bersejarah di cabang warung pak Pri. Ayo buruann datang!!",
        img: "https://torchystacos.com/wp-content/uploads/1-1.png",
      },
      {
        id: 5,
        Name: "Warkop Gaul",
        Jam: "7 am - 11 pm, Sen-Sab",
        Loc: "Nganjuk",
        Desc: "Cobain hidangan yang unik, gaul, dan tiada tanding. Langsung aja ke Warkop Gaul",
        img: "https://th.bing.com/th/id/OIP.c0e6twHMEzeNUws7bSg6FwHaFj?w=255&h=191&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 6,
        Name: "Bu Laras: Resto & Spa",
        Jam: "8 am - 10 pm, Sab-Min",
        Loc: "Nganjuk",
        Desc: "Ingin menikmati hidangan sekaligus menghilangkan stress ? Ya di Bu Laras: Resto & Spa.",
        img: "https://www.susansparesort.com/images/FullSizeRender-2.jpeg",
      },
      {
        id: 7,
        Name: "Warkop AWUR 1",
        Jam: "7 am - 10pm, Sen-Min",
        Loc: "Nganjuk",
        Desc: "Makan dan pesan segala jenis rasa dan kelezatan yang AWUR - AWURan hanya di warung AWUR!",
        img: "https://th.bing.com/th/id/OIP.SwQdYgQmW3C9TGlL21wZKgHaFf?pid=ImgDet&w=480&h=356&rs=1",
      },
      {
        id: 8,
        Name: "Warkop AWUR 2",
        Jam: "7 am - 10pm, Sen-Min",
        Loc: "Nganjuk",
        Desc: "Order makanan yang rasanya AWUR-AWURan ya di AWUR makannya!",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/16/2d/f9/71/warung-kopi-synergy.jpg",
      },
      {
        id: 9,
        Name: "Ayam mbal-Mbul Pinggir Ndalan",
        Jam: "8 am - 8 pm, Sen-Jum",
        Loc: "Nganjuk",
        Desc: "Pesan makanan dan minuman favoritmu dari Ayam Bakar Mbal Mbul Pinggir ndalan murah banget lo !!",
        img: "https://th.bing.com/th/id/OIP.prHXdhlqovTwTmYtzqemMwEyDM?w=278&h=185&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 10,
        Name: "Warkop Sejahtera",
        Jam: "4 pm - 12 pm, Sen-Min",
        Loc: "Nganjuk",
        Desc: "Buat hari-harimu menyenangkan dan sejahtera, mampir yuk ke warkop Sejahtera. Sejahtera harganya, Sejahtera sehatnya :)",
        img: "media/restaurant1.webp",
      },
    ],
  },
  computed: {
    Restaurant(){
      if(this.Search){
        return this.DB.filter((item)=>{
          return this.Search.toLowerCase().split(' ').every(v => item.Name.toLowerCase().includes(v) || item.Loc.toLowerCase().includes(v))
        })
      }
      else return this.DB;
    }
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
