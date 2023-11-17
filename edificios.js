/**let desea = prompt("quieres crear un edificio", "")
if (desea == "si" || desea == "SI" ) {
    prompt ("entraras al programa de creacion de edificios")
} else {
    alert("hasta pronto, gracias") 
    window.close();
}*/
function Edificios(calle, numero, codigoPostal) {
  this.calle = calle;
  this.numero = numero;
  this.codigoPostal = codigoPostal;

  this.plantas = this.agregarPlantasYpuertas = function (
    numeroPlantas,
    numeroPuertas
  ) {
    this.plantas = new Array();
    for (let index = 0; index < numeroPlantas; index++) {
      this.puertas = new Array();
      for (let index = 0; index < numeroPuertas; index++) {
        this.puerta = new Puertas();
        this.puerta.numeroPuerta = index;
        this.puerta.propietario = "Default";
        this.puertas.push(this.puerta);
      }
      this.plantas.push(this.puertas);
    }
  };
}

function Puertas() {
  let numeroPuerta;
  let propietario;
}

edificios = new Array();

function crear(){
  let calle = document.getElementById("calle").value;
  let numero = document.getElementById("numero").value;
  let codigoPostal = document.getElementById("cp").value;

  coco = new Edificios(calle, numero, codigoPostal);
  this.edificios.push(coco);


  //mostrar edificio automaticamente
  document.getElementById('contenido').innerHTML = this.edificios;

}

function modificarEdificio() {
  let numero = document.getElementById("numeroEdificio").value;
  let plantas = document.getElementById("plantas").value;
  let puertas = document.getElementById("puertas").value;

  let edificio = buscarEdificio(numero);

  edificio.agregarPlantasYpuertas(plantas, puertas);
}

function mostrarEdificios() {
  console.log(this.edificios);
}

function modificarNumero() {
  let ediAmodificar = document.getElementById("numEdificio").value;
  let ediModificado = document.getElementById("numEdificioModiciar").value;

  let edificio = buscarEdificio(ediAmodificar);
  edificio.numero = ediModificado;
}

function buscarEdificio(numeroEdificio) {
  let edificio;
  /**
     * for (let index = 0; index < this.edificios.length; index++) {
        if (this.edificios[index] == numeroEdificio) {
            edificio = this.edificios[index];
        }
    }*/
  this.edificios.forEach((element) => {
    if (element.numero == numeroEdificio) {
      edificio = element;
    }
  });
  return edificio;
}
function modificarCalle() {
  let nuemroedi = document.getElementById("numEdificio2").value;
  let nombrecalle = document.getElementById("calleModiciar").value;

  let edificio = buscarEdificio(nuemroedi);
  edificio.calle = nombrecalle;
}
function modificarCP() {
  let nuemroedi = document.getElementById("numEdificio3").value;
  let nombreCP = document.getElementById("cpModificar").value;

  let edificio = buscarEdificio(nuemroedi);
  edificio.codigoPostal = nombreCP;
}

function imprimirNumero() {
  let numImprimirEdificio = document.getElementById(
    "numImprimirEdificio"
  ).value;
  let edificio = buscarEdificio(numImprimirEdificio);

  document.getElementById("numImpreso").innerHTML = edificio.numero;
}

function imprimircodigoP() {
  let numImprimirEdificio00 = document.getElementById(
    "numImprimirEdificio."
  ).value;
  let edificio = buscarEdificio(numImprimirEdificio00);

  document.getElementById("cpostal").innerHTML = edificio.codigoPostal;
}

function imprimirCalle() {
  let numImprimirEdificio000 = document.getElementById(
    "numImprimirEdificio.."
  ).value;
  let edificio = buscarEdificio(numImprimirEdificio000);

  document.getElementById("nummCalle").innerHTML = edificio.calle;
}

function neuevoPropietario() {
  let nEdificio = document.getElementById("numEdificioComp").value;
  let numPlantaComprada = parseInt(
    document.getElementById("numPlantaCompada").value
  );
  let numPuertaPiso = parseInt(document.getElementById("numPuertaPiso").value);
  let nombreP = document.getElementById("numPropietario").value;

  let edificio = buscarEdificio(nEdificio);

  edificio.plantas[numPlantaComprada - 1][numPuertaPiso - 1].propietario = nombreP;
}

function imprimirPlantas() {
  let nEdificio = document.getElementById("numEdificioPisos").value;
  let edificio = buscarEdificio(nEdificio);

  console.log(edificio.plantas.length);

  for (
    let indexPlantas = 0;
    indexPlantas < edificio.plantas.length;
    indexPlantas++
  ) {
    document.write("PLANTA ");
    document.write("<div>" + indexPlantas + "</div> ");
    for (
      let indexPuertas = 0;
      indexPuertas < edificio.plantas[indexPlantas].length;
      indexPuertas++
    ) {
      document.write("PUETA Y PROPETARIO ");
      document.write(
        "<div>" +
          edificio.plantas[indexPlantas - 1][indexPuertas - 1].numeroPuerta +
          "</div>"
      );
      document.write(
        "<div>" +
          edificio.plantas[indexPlantas - 1][indexPuertas - 1].propietario +
          "</div>"
      );
    }
  }
}
