let biciclette = [
    {
        'nome' : 'mountainbike',
        'peso' : 4.5
    },
    {
        'nome' : 'BMX',
        'peso' : 5.3
    },
]
    let pesocheck = 1000;

biciclette.forEach((elemento) => {
    const {nome,peso} = elemento;
    if(peso < pesocheck){
        pesocheck = peso;
        let bici = document.getElementById('bici');
        bici.innerHTML = (`${peso} ${nome}`)
    }
});





