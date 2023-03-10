let biciclette = [
    {
        'nome' : 'mountainbike',
        'peso' : '4,5'
    },
    {
        'nome' : 'BMX',
        'peso' : '5,3'
    },
]
let pesocheck = 1000;
let bicipiuleggera;
let nomebici;

biciclette.forEach((elemento) => {
    const {nome,peso} = elemento;
    if(peso < pesocheck){
        bicipiuleggera = peso;
        pesocheck = peso;
        nomebici = nome;
    }
});

console.log(`${bicipiuleggera} ${nomebici}`);




    



/*
let lightbike = calcolo();


console.log(lightbike);


function calcolo (){
 if(biciclette[0].peso < biciclette[1].peso )
 return biciclette[0].peso;
 else{
    return biciclette[1].peso;
 }
} */