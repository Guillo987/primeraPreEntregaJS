//DECLARACIÓN DE VARIABLES DE SCOPE GLOBAL
let nombre = "";
let apellido = "";
let edad = 0;
let telefono = 0;
let medioContacto = "";
let metodoPago = "";

//INGRESO DE DATOS PERSONALES DEL PACIENTE
function pedirDatos() {
    nombre = prompt('Ingresa tu nombre').toUpperCase(),
        apellido = prompt('Ingresa tu apellido').toUpperCase(),
        edad = Number(prompt('Ingresa tu edad')),
        telefono = Number(prompt('Ingresa un teléfono de contacto')),
        medioContacto = prompt('¿Preferís que te contactemos por videollamada (VIDEO) o por llamada tradicional? (LL)').toUpperCase(),
        metodoPago = prompt('¿Por qué medio vas a realizar tu pago? Ingresa MP para MercadoPago o TR para transferencia bancaria')
}

class nuevoPaciente {
    constructor(nombre, apellido, edad, telefono, medioContacto, metodoPago) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad,
            this.telefono = telefono,
            this.medioContacto = medioContacto,
            this.metodoPago = metodoPago;
    }
}

//OBJETOS INSTANCIADOS MEDIANTE CLASS CONSTRUCTOR
const Paciente3 = new nuevoPaciente('Miguel', 'Martínez', 1, 1556668879, 'LL', 'MP');

//USO DE UN CICLO Y UN CONDICIONAL
let preguntarDeNuevo = true;
do {
    pedirDatos();
    if ((nombre != "") && (apellido != "") && (edad != "") && (telefono != "") && (medioContacto != "") && (metodoPago != "")) {
        alert('Bienvenidx al sistema de gestión de sesiones, ' + nombre);
        preguntarDeNuevo = false;

    } else {
        alert('Debes completar todos los campos requeridos');
    }
} while (preguntarDeNuevo);

//SELECCIÓN DE FECHA DE LA/S SESION/ES
let mesSesion = "";
let fechaSesion = 0;
let franjaHoraria = "";
let reingresarFecha = true;

function elegirFecha() {
    mesSesion = prompt('¿En qué mes vas a utilizar tus sesiones?').toUpperCase();
    fechaSesion = prompt('Escribi el día del mes');
    franjaHoraria = prompt('Ingresa la franja horaria: mañana, tarde o noche');
}

do {
    elegirFecha();
    if (fechaSesion != "" && fechaSesion <= 31 && fechaSesion > 0 && franjaHoraria != "") {
        alert('Perfecto, continuemos :D');
        reingresarFecha = false;
    } else {
        alert('Debes completar todos los campos requeridos');
    }
} while (reingresarFecha);

//INGRESO DE CANTIDAD DE SESIONES
let cantidadSesiones = 0;
let precioSesiones = 1500;
let precioFinal = 0;
let reingresarSesiones = true;

function calcularPrecio() {
    cantidadSesiones = Number(prompt('Ingresa en números la cantidad de sesiones mensuales que querés reservar. Recorda que el máximo es de 4'));
    precioFinal = cantidadSesiones * precioSesiones;
    return precioFinal;
}

do {
    calcularPrecio();
    if (cantidadSesiones <= 4 && cantidadSesiones != 0) {
        alert('Reservaste un total de ' + cantidadSesiones + ' sesiones para los días ' + fechaSesion + ' del mes de ' + mesSesion + ' en la franja horaria de la ' + franjaHoraria + ', por un total de ' + precioFinal + ' pesos. Estamos atentos por cualquier consuta. Nos vemos (:');
        reingresarSesiones = false;
    } else {
        alert('Debes seleccionar un número entre 1 y 4');
    }
} while (reingresarSesiones);

//OBJETOS LITERALES SIMULANDO PACIENTES ANTERIORES REGISTRADOS CON ANTERIORIDAD
const Paciente1 = {
    nombre: "Juan Carlos",
    apellido: "Amendolara",
    edad: 72,
    medioContacto: 'carta',
    metodoPago: 'CASH'
}

const Paciente2 = {
    nombre: "Ernesto",
    apellido: "Sábato",
    edad: 'N/A',
    medioContacto: 'medium',
    metodoPago: 'CASH'
}

//DECLARACIÓN DE ARRAY CON LISTA DE PACIENTES
const listaPacientes = [Paciente2, Paciente1];

// //INGRESO DEL ÚLTIMO OBJETO AL PRINCIPIO DEL ARRAY MEDIANTE EL MÉTODO UNSHIFT()
listaPacientes.unshift(Paciente3);

//SALIDA POR CONSOLA DEL ARRAY ACTUALIZADO Y SU EXTENSIÓN
console.log(listaPacientes);
console.log(listaPacientes.length);