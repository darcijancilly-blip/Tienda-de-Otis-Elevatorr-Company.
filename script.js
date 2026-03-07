const K = 32;

let productos = [
{name:"Coca-Cola", rating:0},
{name:"Pepsi", rating:0},
{name:"Sprite", rating:0},
{name:"Fanta", rating:0},
{name:"Red Bull", rating:0},
{name:"Monster", rating:0},
{name:"Gatorade", rating:0},
{name:"Powerade", rating:0},
{name:"Arizona Tea", rating:0},
{name:"Lipton Ice Tea", rating:0},
{name:"Agua Evian", rating:0},
{name:"Agua Perrier", rating:0},
{name:"Corona", rating:0},
{name:"Heineken", rating:0},
{name:"Club Colombia", rating:0},
{name:"Budweiser", rating:0},
{name:"Starbucks Frappuccino", rating:0},
{name:"Nescafé Latte", rating:0},
{name:"Milo Frío", rating:0},
{name:"Chocolate Alpina", rating:0}
];

let A;
let B;

function probabilidad(rA, rB){
return 1/(1+Math.pow(10,(rB-rA)/400));
}

function actualizarElo(ganaA){

let EA = probabilidad(productos[A].rating, productos[B].rating);
let EB = probabilidad(productos[B].rating, productos[A].rating);

let SA = ganaA ? 1 : 0;
let SB = ganaA ? 0 : 1;

productos[A].rating = productos[A].rating + K*(SA - EA);
productos[B].rating = productos[B].rating + K*(SB - EB);

}

function nuevaComparacion(){

A = Math.floor(Math.random()*productos.length);
B = Math.floor(Math.random()*productos.length);

while(B === A){
B = Math.floor(Math.random()*productos.length);
}

document.getElementById("productoA").innerText = productos[A].name;
document.getElementById("productoB").innerText = productos[B].name;

}

function actualizarTabla(){

let tabla = document.getElementById("tabla");

tabla.innerHTML = `
<tr>
<th>Producto</th>
<th>Puntuación</th>
</tr>
`;

let ranking = [...productos].sort((a,b)=>b.rating-a.rating);

ranking.forEach(p=>{

tabla.innerHTML += `
<tr>
<td>${p.name}</td>
<td>${Math.round(p.rating)}</td>
</tr>
`;

});

}

document.getElementById("productoA").onclick = function(){

actualizarElo(true);
actualizarTabla();
nuevaComparacion();

}

document.getElementById("productoB").onclick = function(){

actualizarElo(false);
actualizarTabla();
nuevaComparacion();

}

actualizarTabla();
nuevaComparacion();