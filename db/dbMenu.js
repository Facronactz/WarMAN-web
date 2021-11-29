var MenuDB = [
  {
    id: "1",
    Name: "Rujak",
    Price: "8000",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "1",
    img: "https://cdn.tasteatlas.com/images/dishrestaurants/0b5a4f49383547a884bae583a5f5e4c2.jpg",
  },
  {
    id: "2",
    Name: "Pecel",
    Price: "10000",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "1",
    img: "https://3.bp.blogspot.com/-l9XIcybK9Rc/WKphvod0WRI/AAAAAAAAEDo/HhVl_WmaSQQIAxnsvv3LOzPG-5jEgw1mQCLcB/s1600/pecel.jpg",
  },
  {
    id: "3",
    Name: "Pecel Lele",
    Price: "10000",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "1",
    img: "https://th.bing.com/th/id/OIP.LlMdyNgBDMnr_DWMtuv50QHaE8?w=261&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: "4",
    Name: "Mie Goreng",
    Price: "5000",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "2",
    img: "https://th.bing.com/th/id/OIP.zXLgKU_sS_RKNUJGTZ_TaAHaGf?pid=ImgDet&rs=1",
  },
  {
    id: "5",
    Name: "Mie Rebus",
    Price: "5000",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "2",
    img: "https://th.bing.com/th/id/OIP._XNLsDkuO7vsUhvWuKya_QHaEp?pid=ImgDet&rs=1",
  },
  {
    id: "6",
    Name: "Bebek Goreng",
    Price: "12500",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "3",
    img: "https://th.bing.com/th/id/OIP.1fYIChn1AReiAcq2AHrQUwHaE8?w=291&h=194&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: "7",
    Name: "Sayur Asem",
    Price: "6000",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "2",
    img: "https://th.bing.com/th/id/OIP.WuV1UwwVzq-bdIDAbQVuFwHaFj?w=219&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: "8",
    Name: "Sayur Sop",
    Price: "6500",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "2",
    img: "https://th.bing.com/th/id/OIP.8mJaLevlv9j5BYDiOXRIIgHaD9?w=315&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: "9",
    Name: "Sayur Lodeh",
    Price: "5000",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "2",
    img: "https://th.bing.com/th/id/OIP.LJlbeKniX93_h6KoKsBD5gHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: "10",
    Name: "Sosis",
    Price: "2000",
    Desc: "Some sort of descriptionof the product",
    Restaurant: "1",
    img: "https://th.bing.com/th/id/OIP.MM3KlwQWneAT7Ujb6N9d7QHaEK?w=297&h=180&c=7&r=0&o=5&pid=1.7",
  }
]

var vue = new Vue({
  el: "#app",
  data: {
    Restaurant: {
      id: localStorage.id,
    },
    Menus: MenuDB
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