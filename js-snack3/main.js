let arraynumeri = [4, 11, 22, 23, 31];
let a = 10;
let b = 19;

calcolo(arraynumeri,a,b);



function calcolo(arraynumeri,a,b){
    arraynumeri.forEach(element => {
        if(element>a && element<b ){
            console.log(element);
        }
    });
}
