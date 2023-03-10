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

let lightbike = calcolo();


console.log(lightbike);


function calcolo (){
 if(biciclette[0].peso < biciclette[1].peso )
 return biciclette[0].peso;
 else{
    return biciclette[1].peso;
 }
} 