// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// En este desafío, se te pide que desarrolles una función que reciba un array de nombres y seleccione un nombre aleatorio. La función debe devolver el nombre seleccionado. Por ejemplo, si el array de nombres es ["Pedro", "Juan", "Luis", "Ana", "Laura"], la función debe devolver uno de los nombres de la lista, seleccionado aleatoriamente.
// Para resolver este desafío, deberás seguir los siguientes pasos:
// 1. Desarrolla una función llamada selectName que reciba un array de nombres como argumento.
// 2. Dentro de la función, genera un número aleatorio entre 0 y la longitud del array de nombres.
// 3. Utiliza el número aleatorio para seleccionar un nombre del array.
// 4. Devuelve el nombre seleccionado.
// 5. Finalmente, exporta la función selectName.
// Ejemplo:
// selectName(["Pedro", "Juan", "Luis", "Ana", "Laura"]);
// // Devuelve: "Juan"
// Nota: Puedes utilizar la función Math.random() para generar un número aleatorio.

let array = [];
let random = Math.floor(Math.random() * array.length);
let selectName = (array) => {
    return array[random];
};

module.exports = selectName;
