function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.log("No se puede dividir por cero");
        return null;
    }
    return a / b;
}

function solicitarNumero(mensaje) {
    const entrada = prompt(mensaje);
    if (entrada === null) {
        console.log("Operación cancelada");
        return null;
    }
    const valor = Number(entrada);
    if (!Number.isFinite(valor)) {
        console.log("Valor inválido");
        return null;
    }
    return valor;
}

function crearUsuario(nombre, edad, correo) {
    return {
        nombre,
        edad,
        correo,
        presentarse() {
            return "Hola, mi nombre es " + this.nombre + ", tengo " + this.edad +
                   " años y mi correo es " + this.correo + ".";
        }
    };
}

const numeros = [5, 12, 8, 20, 3, 15];

function filtrarNumerosMayores(arr, limite) {
    return arr.filter(numero => numero > limite);
}

function mostrarMayoresA10() {
    const mayores = filtrarNumerosMayores(numeros, 10);
    if (mayores.length === 0) {
        console.log("No hay números mayores a 10");
        return;
    }
    console.log("Números mayores a 10:", mayores.join(", "));
}

function mostrarMenu() {
    console.log("Seleccione una opción:");
    console.log("1 - Sumar");
    console.log("2 - Restar");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Ver números mayores a 10");
    console.log("6 - Crear usuario");
}

mostrarMenu();

const opcion = Number(prompt(
    "Seleccione una opción:\n\n" +
    "1 - Sumar\n" +
    "2 - Restar\n" +
    "3 - Multiplicar\n" +
    "4 - Dividir\n" +
    "5 - Ver números mayores a 10\n" +
    "6 - Crear usuario"
));

if (!Number.isFinite(opcion)) {
    console.log("Selección inválida");
} else {
    switch (opcion) {
        case 1:
        case 2:
        case 3:
        case 4: {
            const num1 = solicitarNumero("Ingrese el primer número:");
            const num2 = solicitarNumero("Ingrese el segundo número:");
            if (num1 === null || num2 === null) {
                break;
            }
            let resultado = null;
            if (opcion === 1) {
                resultado = sumar(num1, num2);
            } else if (opcion === 2) {
                resultado = restar(num1, num2);
            } else if (opcion === 3) {
                resultado = multiplicar(num1, num2);
            } else if (opcion === 4) {
                resultado = dividir(num1, num2);
            }
            if (resultado !== null) {
                console.log("Resultado:", resultado);
            }
            break;
        }
        case 5:
            mostrarMayoresA10();
            break;
        case 6: {
            const nombre = prompt("Ingrese su nombre:");
            const edad = solicitarNumero("Ingrese su edad:");
            const correo = prompt("Ingrese su correo:");
            if (!nombre || edad === null || !correo) {
                console.log("Datos incompletos");
                break;
            }
            const nuevoUsuario = crearUsuario(nombre, edad, correo);
            console.log(nuevoUsuario.presentarse());
            break;
        }
        default:
            console.log("Opción no válida");
    }
}
