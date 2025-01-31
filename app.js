// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Por favor, ingrese un nombre.');
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';  // Limpiar el input
        mostrarAmigos();  // Actualizar la lista visualmente
    }
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpiar la lista antes de agregar los nuevos elementos

    // Crear un nuevo <li> para cada amigo y agregarlo a la lista
    for (let amigo of amigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }

    // Mostrar un mensaje visual después de agregar un amigo
    let mensaje = document.createElement('p');
    document.body.appendChild(mensaje);
    setTimeout(() => mensaje.remove(), 2000); // Eliminar el mensaje después de 2 segundos
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        document.getElementById('resultado').innerHTML = amigoSorteado;
    }
}

function reiniciarJuego() {
    amigos = [];  // Limpiar el array de amigos
    document.getElementById('listaAmigos').innerHTML = '';  // Limpiar la lista visual
    document.getElementById('amigo').value = '';  // Limpiar el input
    document.getElementById('resultado').innerHTML = '';  // Limpiar el resultado del sorteo
}