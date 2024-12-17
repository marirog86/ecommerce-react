const products = [
    {
        id: "fjk976",
        nombre: "Cheesecake",
        descripcion: "Cheesecake de frutilla",
        precio: 500,
        imagen: "/public/img/cheesecake.jpg",
        categoria: "frutales"
    },

    {
        id: "rth542",
        nombre: "Tarta de Manzana",
        descripcion: "Tarta de manzana y canela",
        precio: 500,
        imagen: "/public/img/tarta_manzana.jpg",
        categoria: "frutales"
    },

    {
        id: "sbm316",
        nombre: "Tarta Frutal",
        descripcion: "Tarta con frutas y crema pastelera",
        precio: 350,
        imagen: "/public/img/tarta_frutal.jpg",
        categoria: "frutales"
    },
    {
        id: "apg038",
        nombre: "Torta de chocolate",
        descripcion: "Torta de chocolate",
        precio: 350,
        imagen: "/public/img/torta_choco1.jpg",
        categoria: "chocolate"
    },

    {
        id: "xdb822",
        nombre: "Brownie",
        descripcion: "Brownie de chocolate con dulce de leche y merengue",
        precio: 350,
        imagen: "/public/img/brownie.jpg",
        categoria: "chocolate"
    },

    {
        id: "ukd721",
        nombre: "Mini tarteletas",
        descripcion: "Mini tarteletas surtidas x10",
        precio: 800,
        imagen: "/public/img/mini_tartas.jpg",
        categoria: "minis"
    },

    {
        id: "lpw298",
        nombre: "Sandwich de Pollo",
        descripcion: "Sandwich de pollo",
        precio: 300,
        imagen: "/public/img/sandwich_pollo.jpg",
        categoria: "salado"
    },

    {
        id: "mws106",
        nombre: "Macarons",
        descripcion: "Macarons variados caja x6",
        precio: 450,
        imagen: "/public/img/macarons2.jpg",
        categoria: "minis"
    },

    {
        id: "tfh155",
        nombre: "Pizza peperoni",
        descripcion: "Pizza 30cm de diametro sabor peperoni",
        precio: 350,
        imagen: "/public/img/pizza_peperoni.jpg",
        categoria: "salado"
    },

    {
        id: "wng688",
        nombre: "Hamburguesa Triple",
        descripcion: "Hamburguesa triple con queso cheddar y cebolla caramelizada",
        precio: 450,
        imagen: "/public/img/hamburguesa_triple.jpg",
        categoria: "salado"
    },
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export { getProducts }