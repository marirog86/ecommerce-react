const products = [
    {
        id: "fjk976",
        nombre: "Cheesecake",
        descripcion: "Cheesecake de frutilla",
        precio: 500,
        imagen: "/public/img/cheesecake.jpg",
        categoria: "dulce"
    },

    {
        id: "lpw298",
        nombre: "Sandwich",
        descripcion: "Sandwich de jamón y queso x10",
        precio: 300,
        imagen: "/public/img/sandwich.jpg",
        categoria: "salado"
    },

    {
        id: "mws106",
        nombre: "Macarons",
        descripcion: "Macarons variados caja x6",
        precio: 450,
        imagen: "/public/img/macarons2.jpg",
        categoria: "dulce"
    },
    {
        id: "lsd502",
        nombre: "Pizza",
        descripcion: "Pizza 30cm de diametro",
        precio: 250,
        imagen: "/public/img/pizza.jpg",
        categoria: "salado"
    },
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2500)
    })
}

export { getProducts }