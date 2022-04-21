var productos = [
    {
        nombre: "Fender Stratocaster 57'",
        precio: 1000,
        imagen: "./assets/producto-1.png",
        id: 0,
        cantidad: 1,
    },
    {
        nombre: "Gibson Sg",
        precio: 2000,
        imagen: "./assets/producto-2.png",
        id: 1,
        cantidad: 1,
    },
    {
        nombre: "Fender Stratocaster 70'",
        precio: 3000,
        imagen: "./assets/producto-3.png",
        id: 2,
        cantidad: 1,
    },
    {
        nombre: "Fender Modern Telecaster",
        precio: 4000,
        imagen: "./assets/producto-4.png",
        id: 3,
        cantidad: 1,
    },

]

let carrito = []
let total = [];
const carro = document.querySelector(".carro__display");
const precioTotal = document.getElementById("precioTotal");


productos.forEach(item => {
    let div = document.createElement("div");
    div.setAttribute("class", "tienda__hijo")
    div.innerHTML = `
        <h5>${item.nombre}</h5>
        <img src="${item.imagen}" alt="">
        <p class="">${item.precio} $</p>
        <button id="${item.id}" class="boton">Agregar 🛒</button>   
    `
    document.querySelector(".tienda").appendChild(div)

    let boton = document.getElementById(`${item.id}`);

    boton.addEventListener("click", () => {
        agregar(item.id)
    })

})

const agregar = (id) => {
    const repite = carrito.some(prod => prod.id === id);
    if (repite) {
        productos[id].cantidad++;

        document.getElementById(`cant${id}`).textContent = productos[id].cantidad
        precioTotal.textContent = actualizarPrecio();
    } else {
        const item = productos.find((prod) => prod.id === id);
        carrito.push(item);
        precioTotal.textContent = actualizarPrecio();
        displayCarro()
    }
};


const displayCarro = () => {
    carro.innerHTML = ""
    carrito.forEach(item => {
        let div = document.createElement("div");
        div.setAttribute("class", "carro__item");
        div.innerHTML = `
        <img src="${item.imagen}" alt="">
        <h5>${item.nombre}</h5>
        <p>Precio: ${item.precio} $</p>
        <p>Cantidad: <span id="cant${item.id}">${item.cantidad}</span></p>
        <button id="remove${item.id}" class="remove">🗑</button>
        `
        carro.append(div)
        total.push(item.precio)
        let boton = document.getElementById(`remove${item.id}`);
        boton.addEventListener("click", () => {
            eliminar(item.id)
        })
    })
};

const eliminar = (id) => {
    let item = carrito.find((prod) => prod.id === id)
    let indice = carrito.indexOf(item)
    carrito.splice(indice, 1);
    productos[id].cantidad = 1;
    displayCarro()
    precioTotal.textContent = actualizarPrecio();
};

let actualizarPrecio = () => {
    let total = [];
    let $$$ = 0;
    for (let i = 0; i < carrito.length; i++) {
        let pyc = carrito[i].precio * carrito[i].cantidad
        total.push(pyc)
    }
    for (let x = 0; x < total.length; x++) {
        $$$ += total[x];
    }
    return $$$
};












// addBtn.forEach(boton => {
//     let p2 = document.createElement("p");
//     let cantidad = 1;


//     boton.addEventListener("click", () => {
//         total = total + productos[boton.id].precio
//         precioTotal()


//         if (carrito.includes(boton.id)) {
//             cantidad++;
//             p2.textContent = cantidad;
//             console.log(cantidad);

//         } else if (!carrito.includes(boton.id)) {
//             let name = productos[boton.id].nombre;
//             let precio = `${productos[boton.id].precio} $`;
//             let img = productos[boton.id].imagen;
//             let remove = document.createElement("button")
//             let div = document.createElement("div")
//             let h5 = document.createElement("h5");
//             let p = document.createElement("p");
//             let imagen = document.createElement("img")
//             carrito.push(boton.id);
//             remove.setAttribute("class", "remove")
//             remove.setAttribute("id", `${boton.id}`)
//             remove.textContent = "X"
//             div.setAttribute("class", "carro__item")
//             p2.setAttribute("class", "cantidad");
//             h5.textContent = name;
//             p.textContent = precio;
//             p2.textContent = cantidad;

//             imagen.src = img;

//             div.appendChild(imagen);
//             div.appendChild(h5);
//             div.appendChild(p);
//             div.appendChild(p2)
//             div.appendChild(remove)
//             document.querySelector(".carro").appendChild(div);

//             let removedores = document.querySelectorAll(".remove");
//             let precioDos = Number(p.textContent.replace("$", ""))

//             removedores.forEach(remover => {
//                 console.log(precioDos);
//                 remover.addEventListener("click", () => {
//                     total = total - precioDos
//                     carrito.pop([boton.id])
//                     cantidad--;
//                     p2.textContent = cantidad;
//                     precioTotal()
//                     if (cantidad == 0) {
//                         div.remove()
//                         cantidad = 1;
//                     }
//                 })
//             })
//         }

//     })
// })



