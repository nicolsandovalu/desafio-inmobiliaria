const casas = [
    {
        id: 1,
        nombre: "Casa 1",
        precio: 1000,
        descripcion: "descripcion de la casa 1",
        imagen: "./assets/img/aer.jpg",
        cuartos: 1,
        metros: 100,
    },
    {
        id: 2,
        nombre: "Casa 2",
        precio: 2000,
        descripcion: "descripcion de la casa 2",
        imagen: "./assets/img/2.jpg",
        cuartos: 2,
        metros: 200,
    },
    {
        id: 3,
        nombre: "Casa 3",
        precio: 3000,
        descripcion: "descripcion de la casa 3",
        imagen: "./assets/img/3.jpg",
        cuartos: 3,
        metros: 300,
    },
    {
        id: 4,
        nombre: "Casa 4",
        precio: 4000,
        descripcion: "descripcion de la casa 4",
        imagen: "./assets/img/4.jpg",
        cuartos: 4,
        metros: 400,
    }
]
const renderizar = () => {
    const cardContainer = document.querySelector(".card-container")
    casas.map(casa => {
        console.log('casa', casa)
        const card = document.createElement("div")
        cardContainer.classList.add("row")
        card.classList.add("card")
        card.innerHTML = `
        <img src="${casa.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${casa.nombre}</h5>
            <p class="card-text">Descripcion ${casa.descripcion}</p>
            <p class="card-text">Precio ${casa.precio}</p>
            <p class="card-text">Cuartos ${casa.cuartos}</p>
            <p class="card-text">Metros ${casa.metros}</p>  
        </div>
        `;
        cardContainer.appendChild(card)
    })
}

renderizar()
document.addEventListener("DOMContentLoaded", function () {

})
const limpiar=()=>{
    const cardContainer = document.querySelector(".card-container")
    cardContainer.innerHTML=""
}
const buscar = () => {
    const cuartos = parseInt(document.getElementById("cuartos").value)
    const mtInit = parseInt(document.getElementById("mtInit").value)
    const mtEnd = parseInt(document.getElementById("mtEnd").value)
    console.log('cuartos', cuartos, 'mtInit', mtInit, 'mtEnd', mtEnd);

    if (!mtInit && !mtEnd) {
        alert("Ingrese un rango de metros")
        limpiar()
        renderizar()
        return false
    }
    const casasFiltradas = casas.filter(casa => {
        return casa.metros >= mtInit && casa.metros <= mtEnd && casa.cuartos <= cuartos && casa.cuartos >= cuartos
    })
    limpiar()
    casasFiltradas.map(casa => {
        const cardContainer = document.querySelector(".card-container")
        console.log('casa', casa)
        const card = document.createElement("div")
        cardContainer.classList.add("row")
        card.classList.add("card")
        card.innerHTML = `
        <img src="${casa.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${casa.nombre}</h5>
            <p class="card-text">Descripcion ${casa.descripcion}</p>
            <p class="card-text">Precio ${casa.precio}</p>
            <p class="card-text">Cuartos ${casa.cuartos}</p>
            <p class="card-text">Metros ${casa.metros}</p>  
        </div>
        `;
        cardContainer.appendChild(card)

    })
    console.log('casasFiltradas', casasFiltradas);
    return false

}