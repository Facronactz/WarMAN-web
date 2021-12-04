var vue = new Vue({
    el: "#app",
    data: {
      Search: null,
      Restaurant: {
        id: localStorage.id,
      },
      DB: MenuDB
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