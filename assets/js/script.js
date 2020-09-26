var app = new Vue({
    el: '#app',
    data: {
        message: '',
        search: '',
        json: {},
        colors: [],
    },
    computed: {

        filteredColors() {
            //filtra el array colors[] según los carácteres ingresados en el input
            return this.colors.filter(color => {
                return color.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        }
    },
    mounted() {
        //llamada a archivo colors.json
        axios.get('./colors.json')
            .then((response) => {
                //nos interesa solo el contenido de data
                this.json = response.data;
            }).then(() => {
                //luego de tener la información se itera la variable json y se agregan al array con etiqueta name y color
                for (let element in this.json) {
                    this.colors.push({
                        name: element,
                        color: this.json[element]
                    });
                }
            })
    }
})