/* Micro-desafio04 */   
let num1 = 7; 
let num2 = 3;
let operador = 'restar'; 
let resultado;
let escribir = 'el resultado de '+ operador + ' ' + num1 + ' con ' + num2 + ' es ';


switch(operador){
    case 'sumar':
        resultado = num1 + num2
        break;
    case 'restar':
        resultado = num1 - num2
        break
    case 'multiplicar':
        resultado = num1 * num2
        break
    case 'dividir':
        resultado = num1 / num2
        break
        default: escribir = ('Las operaciones aceptadas son:Sumar-Restar-Multiplicar-Dividir.')
                resultado = ''

    }



console.log(escribir + resultado)