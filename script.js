// ! Programa que organicé números del menor al mayor
// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.

import promptSync from "prompt-sync";
const prompt = promptSync();

function organizarNumeros(){

    let listaNumeros = []

    console.log("Orgnaizador de números");
    console.log("\nSi no quieres ingresar más número coloca cualquier letra");

    while (true){
        
        let numero = prompt("Ingresé un número: ");
        let valorNum = parseInt(numero);


        if (!isNaN(valorNum)){
            listaNumeros.push(valorNum);
        }else {
            break
        }

    }

    if (listaNumeros.length > 0){
        for (let i = 0; i < listaNumeros.length; i++) {
            for (let j = 0; j < listaNumeros.length - 1; j++) {
                if (listaNumeros[j] > listaNumeros[j + 1]) {
                    // Intercambiar
                    let temp = listaNumeros[j];
                    listaNumeros[j] = listaNumeros[j + 1];
                    listaNumeros[j + 1] = temp;
                }
            }
        }

        console.log("Números ordenados de menor a mayor:");
        console.log(listaNumeros);

    }

}

organizarNumeros()