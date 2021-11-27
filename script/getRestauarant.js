var vue = new Vue({
    el: '#main',
    data: {
        Restaurant: {
            id: localStorage.id,
            Name: localStorage.Name,
            'Open hour': localStorage.Jam,
            Location: localStorage.Loc,
            Img: localStorage.Img,
            Description: localStorage.Desc
        }
    }
})