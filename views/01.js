const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo, trabajando con VueJs.',
        producto: [
            {nombre: 'Manzana', cantidad: 15},
            {nombre: 'Pera', cantidad: 0},
            {nombre: 'Fresa', cantidad: 7}
        ],
        nuevaFruta: ""
    },
    methods: {
        addFruit(){
            this.producto.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
        }
    }
})

