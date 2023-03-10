let squadre = [
    {
        'nome': 'Hotel',
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': 'Bravo',
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': 'Charlie',
        'punti': 0,
        'falli': 0,
    },
]

let punteggi = [
    {
        'nome': 'Hotel',
        'falli': 0,
    },
    {
        'nome': 'Bravo',
        'falli': 0,
    },
    {
        'nome': 'Charlie',
        'falli': 0,
    },
]

squadre.forEach((elemento) => {
    let {punti , falli} = elemento;
    punti = Math.floor(Math.random()*10);
    falli = Math.floor(Math.random()*10);
    elemento.falli = falli;
    elemento.punti = punti;
});
console.log(squadre);

punteggi.forEach((elemento,index) => {
    let {falli} = elemento;
    falli = squadre[index].falli;  
    elemento.falli = falli;
});  

console.log(punteggi);





