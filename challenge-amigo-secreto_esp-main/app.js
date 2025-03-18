// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Validacion para que no permita numeros ni caracteres especiales :)
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (!regex.test(nombre)){
        alert("Solo se permite letras. No uses números ni carácteres especiales")
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el input después de agregar
}

// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un amigo de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para hacer el sorteo.");
        return;
    }

    let amigosDisponibles = [...amigos];
    let resultado = [];

    amigos.forEach((amigo) => {
        let posibles = amigosDisponibles.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            alert("No se puede realizar el sorteo sin coincidencias válidas.");
            return;
        }

        let seleccionado = posibles[Math.floor(Math.random() * posibles.length)];
        resultado.push(`${amigo} -> ${seleccionado}`);

        // Remover el seleccionado de la lista de disponibles
        amigosDisponibles = amigosDisponibles.filter(a => a !== seleccionado);
    });

    mostrarResultado(resultado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(resultado) {
    const listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = "";
    
    resultado.forEach((par) => {
        const li = document.createElement("li");
        li.textContent = par;
        listaResultados.appendChild(li);
    });
}
