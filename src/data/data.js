const products = [
    {
        id: "fjk976",
        nombre: "Cheesecake",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 500,
        imagen: "/public/img/cheesecake.jpg",
        categoria: "frutales",
        stock: 5
    },

    {
        id: "rth542",
        nombre: "Tarta de Manzana",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 500,
        imagen: "/public/img/tarta_manzana.jpg",
        categoria: "frutales",
        stock: 4
    },

    {
        id: "sbm316",
        nombre: "Tarta Frutal",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 350,
        imagen: "/public/img/tarta_frutal.jpg",
        categoria: "frutales",
        stock: 3
    },
    {
        id: "apg038",
        nombre: "Torta de chocolate",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 350,
        imagen: "/public/img/torta_choco1.jpg",
        categoria: "chocolate",
        stock: 8
    },

    {
        id: "xdb822",
        nombre: "Brownie",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 350,
        imagen: "/public/img/brownie.jpg",
        categoria: "chocolate",
        stock: 6
    },

    {
        id: "ukd721",
        nombre: "Mini tarteletas",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 800,
        imagen: "/public/img/mini_tartas.jpg",
        categoria: "minis",
        stock: 2
    },

    {
        id: "lpw298",
        nombre: "Sandwich de Pollo",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 300,
        imagen: "/public/img/sandwich_pollo.jpg",
        categoria: "salado",
        stock: 6
    },

    {
        id: "mws106",
        nombre: "Macarons",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 450,
        imagen: "/public/img/macarons2.jpg",
        categoria: "minis",
        stock: 5
    },

    {
        id: "tfh155",
        nombre: "Pizza peperoni",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 350,
        imagen: "/public/img/pizza_peperoni.jpg",
        categoria: "salado",
        stock: 3
    },

    {
        id: "wng688",
        nombre: "Hamburguesa Triple",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae ",
        precio: 450,
        imagen: "/public/img/hamburguesa_triple.jpg",
        categoria: "salado",
        stock: 4
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