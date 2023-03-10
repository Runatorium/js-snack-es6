let arraynumeri = [4, 11, 22, 23, 31];
let a = 3;
let b = 30;
let arraynumerifinali = [];

calcolo(arraynumeri,a,b);



function calcolo(arraynumeri,a,b){
    arraynumeri.forEach(element => {
        if(element>a && element<b ){
            arraynumerifinali.push(element);
        }
    });
}

console.log(arraynumerifinali);