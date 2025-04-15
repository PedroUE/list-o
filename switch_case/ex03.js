let numero1 = 10;
let numero2 = 1
let resultado = `Divisão`

switch(resultado){
    case `soma`: console.log(numero1 + numero2);
    break;
   
    case `subtração`: console.log(numero1 - numero2);
    break;
   
    case `Multiplicação`: console.log(numero1 * numero2);
    break;
   
    case `Divisão`: console.log(numero1 / numero2);
    break;

    default: console.log(`Operação não Valida.`);
}