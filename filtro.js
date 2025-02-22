// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

const lista = document.getElementById("lista-de-productos")//Le cambié el name por id y le quité la s a elements
const filtro = document.querySelector('input');// el punto es para las clases e input es un tag

const displayProductos = (productos) => { // se invocaba la función pero no existía así que la cree y reutilicé el código en la parte de abajo
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild); // Limpia la lista antes de agregar los productos
  }

  productos.forEach(producto => {
    let divProducto = document.createElement("div")
    divProducto.classList.add("producto")

    let titulo = document.createElement("p")//cambié el nombre de la variable para que fuera más entendible y el tipo de var a let
    titulo.classList.add("titulo")
    titulo.textContent = producto.nombre

    let imagen = document.createElement("img"); // cambié el var por let
    imagen.setAttribute('src', producto.img);

    divProducto.appendChild(titulo)
    divProducto.appendChild(imagen)

    lista.appendChild(divProducto)
  });

};

displayProductos(productos)


const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {

  const texto = filtro.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
}
//agregué toLowerCase para que no afecte si se ponen mayúsculas
const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto.toLowerCase()) ||
    item.color.toLowerCase().includes(texto.toLowerCase())
  );

}  