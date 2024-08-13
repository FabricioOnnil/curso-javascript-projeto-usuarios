let a = 10;
const b = "10";


//console.log(a = b);
//console.log(a == b);
//console.log(a === b);
//console.log(a != b);
//console.log(a == b && typeof b == 'string');
//console.log(a === b || typeof a == 'string');

/*
let cor = "amarelo";

if (cor === "verde"){
        console.log("Siga");
}
else if( cor === "amarelo"){
    console.log("Atenção");
}
else {
    console.log("Pare");
}
*/

let cor = "verde";

switch (cor) {
    case "verde":
        console.log("Siga!");
        break;
    case "amarelo":
        console.log("Atenção!");
        break;
    case "vermelho":
        console.log("Pare!");
        break;
    case "azul":
        console.log("Boa Sorte!");
        break;    
    default:
        console.log("Não Sei");
}


let n = 7;

for (let i=0; i<=10; i++) {
    console.log(`${i} X ${n} = ${i*n}`);
    //console.log(i = " X " + n + " = " + (i * n));
}


var gender = document.querySelector("#exampleInputGenderM");
var name = document.querySelector("#exampleInputName");