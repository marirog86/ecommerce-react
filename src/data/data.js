const products = [
    {
        id: "fjk976",
        nombre: "Cheesecake",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 500,
        imagen: "/public/img/cheesecake.jpg",
        categoria: "frutales"
    },

    {
        id: "rth542",
        nombre: "Tarta de Manzana",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 500,
        imagen: "/public/img/tarta_manzana.jpg",
        categoria: "frutales"
    },

    {
        id: "sbm316",
        nombre: "Tarta Frutal",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 350,
        imagen: "/public/img/tarta_frutal.jpg",
        categoria: "frutales"
    },
    {
        id: "apg038",
        nombre: "Torta de chocolate",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 350,
        imagen: "/public/img/torta_choco1.jpg",
        categoria: "chocolate"
    },

    {
        id: "xdb822",
        nombre: "Brownie",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 350,
        imagen: "/public/img/brownie.jpg",
        categoria: "chocolate"
    },

    {
        id: "ukd721",
        nombre: "Mini tarteletas",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 800,
        imagen: "/public/img/mini_tartas.jpg",
        categoria: "minis"
    },

    {
        id: "lpw298",
        nombre: "Sandwich de Pollo",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 300,
        imagen: "/public/img/sandwich_pollo.jpg",
        categoria: "salado"
    },

    {
        id: "mws106",
        nombre: "Macarons",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 450,
        imagen: "/public/img/macarons2.jpg",
        categoria: "minis"
    },

    {
        id: "tfh155",
        nombre: "Pizza peperoni",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 350,
        imagen: "/public/img/pizza_peperoni.jpg",
        categoria: "salado"
    },

    {
        id: "wng688",
        nombre: "Hamburguesa Triple",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
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