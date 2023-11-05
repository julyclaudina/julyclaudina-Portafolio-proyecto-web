// 1- Suma de Números Pares: Crea un programa que sume todos los números
//  pares en un array.

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

function sumaNumerosPares(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            suma += array[i];
        }
    }
    return suma;
}
console.log("La suma de los números pares es: " + sumaNumerosPares(arrayNumeros));

// 2- Factorial de un Número: Escribe una función que
// calcule el factorial de un número utilizando un bucle.

let numero = 4;
let resultado = calcularFactorial(numero);

function calcularFactorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    } else if (n === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

console.log(`El factorial de ${numero} es: ${resultado}`);

// 3-filtrar Números Primos: Crea una función que reciba un array de números y devuelva un
// nuevo array que contenga solo los números primos.


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primos = obtenerNumerosPrimos(numeros);


function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

function obtenerNumerosPrimos(array) {
    const numerosPrimos = [];

    for (const numero of array) {
        if (esPrimo(numero)) {
            numerosPrimos.push(numero);
        }
    }

    return numerosPrimos;
}

console.log("Números primos en el array:", primos);


// 4-Cálculo de Promedio: Crea una función que calcule el promedio de los elementos en un
// array

const numeros2 = [1, 2, 3, 4, 5];
function calcularPromedio(array) {
    if (array.length === 0) {
        return 0;
    }

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    let promedio = suma / array.length;
    return promedio;
}

console.log("El promedio es: " + calcularPromedio(numeros2));



// 5-Eliminar Duplicados en un Array: Escribe una función que tome un array y elimine los
// elementos duplicados, devolviendo un nuevo array sin duplicados.

function eliminarDuplicados(array) {
    return array.filter((elemento, indice, arr) => {
        return arr.indexOf(elemento) === indice;
    });
}


let numeros3 = [5, 5, 5, 6, 7, 8];
let sinDuplicados = eliminarDuplicados(numeros3);
console.log("Array sin duplicados:", sinDuplicados);



// 6-Ordenar un Array de Objetos: Crea una función que ordene un array de objetos por un
// campo específico dentro de los objetos


let personas = [
    { nombre: "Julieta", edad: 30 },
    { nombre: "Ezequiel", edad: 25 },
    { nombre: "Roman", edad: 35 },
    { nombre: "Dylan", edad: 2 }
];
function ordenarPorCampo(array, campo) {
    return array.sort((a, b) => (a[campo] > b[campo] ? 1 : -1));
}

console.log(ordenarPorEdadDeMenorAmayor(personas, "edad"));
