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
        
    },
    {
        'nome': 'Bravo',
        
    },
    {
        'nome': 'Charlie',
        
    },
]

squadre.forEach((elemento) => {
    let {punti , falli} = elemento;
    punti = Math.floor(Math.random()*10);
    falli = Math.floor(Math.random()*10);
    punteggi.push({'falli':falli});
});

console.log(punteggi);





