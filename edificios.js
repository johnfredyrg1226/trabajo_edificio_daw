// esta linea crea una ventana para interactuar con el usuario.
let desea = prompt("quieres crear un edificio", "")
if (desea == "si" || desea == "SI" ) {
    prompt ("entraras al programa de creacion de edificios")
} else {
    alert("hasta pronto, gracias") 
    window.close();
}
//objecto Edificion con parametor. obligatorios al crear el edificio, con toas sus caracteristicas 
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
// aqui creamos función puertas con numero de puerta y propietario
function Puertas() {
  let numeroPuerta;
  let propietario;
}
// se crea un array par que cada vez que creemos un edificio nos lo guarde aqui.
edificios = new Array();

// se crea el edificio
function crear(){
  let calle = document.getElementById("calle").value;// cacturamos del imput del html con id "calle"
  let numero = document.getElementById("numero").value;
  let codigoPostal = document.getElementById("cp").value;

  coco = new Edificios(calle, numero, codigoPostal);// el nuevo edificio se guarda en una variable. todo el objecto edificio
  this.edificios.push(coco);// se agrega .push el nuevo edificio que ha sido guardado en la variable 


  //mostrar edificio automaticamente
 // document.getElementById('contenido').innerHTML = this.edificios;

}

// esto es para modificar edicio agrgando puertas y plantas
function modificarEdificio() {
  let numero = document.getElementById("numeroEdificio").value;
  let plantas = document.getElementById("plantas").value;
  let puertas = document.getElementById("puertas").value;

  let edificio = buscarEdificio(numero); // se busca el edificio por el elemento numero o nombre 

  edificio.agregarPlantasYpuertas(plantas, puertas);// se le agrgan las plantas y las puertas al edificio con numero o nombre.
}
// se muestra el edicio es una funcion que se llama con un botton en el html.
function mostrarEdificios() {
  console.log(this.edificios);
}
// se modifica el numero o nombre del eficio.
function modificarNumero() {
  let ediAmodificar = document.getElementById("numEdificio").value;
  let ediModificado = document.getElementById("numEdificioModiciar").value;

  let edificio = buscarEdificio(ediAmodificar);
  edificio.numero = ediModificado;
}


// con esta funcion buscamos el edificio por numero de edifiio o en el caso nombre...
function buscarEdificio(numeroEdificio) {
  let edificio;
  /**
     * for (let index = 0; index < this.edificios.length; index++) {
        if (this.edificios[index] == numeroEdificio) {
            edificio = this.edificios[index];
        }
    }*/
  this.edificios.forEach((element) => { // foreach hace lo mismo que el for comentado lineas 83-87
    if (element.numero == numeroEdificio) {
      edificio = element;
    }
  });
  return edificio;
}
// se modifica la calle 
function modificarCalle() {
  let nuemroedi = document.getElementById("numEdificio2").value;
  let nombrecalle = document.getElementById("calleModiciar").value;

  let edificio = buscarEdificio(nuemroedi);
  edificio.calle = nombrecalle;
}
//modifica Codigo postal
function modificarCP() {
  let nuemroedi = document.getElementById("numEdificio3").value;
  let nombreCP = document.getElementById("cpModificar").value;

  let edificio = buscarEdificio(nuemroedi);
  edificio.codigoPostal = nombreCP;
}

//imprime numero del edificio.
function imprimirNumero() {
  let numImprimirEdificio = document.getElementById(
    "numImprimirEdificio"
  ).value;
  let edificio = buscarEdificio(numImprimirEdificio);

  document.getElementById("numImpreso").innerHTML = edificio.numero;
}

//imprime codigo postal 
function imprimircodigoP() {
  let numImprimirEdificio00 = document.getElementById(
    "numImprimirEdificio."
  ).value;
  let edificio = buscarEdificio(numImprimirEdificio00);

  document.getElementById("cpostal").innerHTML = edificio.codigoPostal;
}
//imprime calle del edificio 
function imprimirCalle() {
  let numImprimirEdificio000 = document.getElementById(
    "numImprimirEdificio.."
  ).value;
  let edificio = buscarEdificio(numImprimirEdificio000);

  document.getElementById("nummCalle").innerHTML = edificio.calle;
}
// se agregan los propietarios de las pisos o puertas de los edificios.
function neuevoPropietario() {
  let nEdificio = document.getElementById("numEdificioComp").value;
  // se utiliza el parseInt por que la entrada del impout es un string
  let numPlantaComprada = parseInt(document.getElementById("numPlantaCompada").value);
  let numPuertaPiso = parseInt(document.getElementById("numPuertaPiso").value);
  let nombreP = document.getElementById("numPropietario").value;

  let edificio = buscarEdificio(nEdificio);

  edificio.plantas[numPlantaComprada - 1][numPuertaPiso - 1].propietario = nombreP;
}
//imprime plantas
function imprimirPlantas() {
  let nEdificio = document.getElementById("numEdificioPisos").value;
  let edificio = buscarEdificio(nEdificio);

  console.log(edificio.plantas.length);
/**con el numero del edicio se busca y se imprime las plantas.
 * todo se escrime en un nuevo documento.
 * 
*/
  for (
    let indexPlantas = 0;
    indexPlantas < edificio.plantas.length;
    indexPlantas++
  ) {
    document.write("PLANTA DEL EDIFICIO ");
    document.write("<div>" + indexPlantas + "</div> ");
    for (
      let indexPuertas = 0;
      indexPuertas < edificio.plantas[indexPlantas].length;
      indexPuertas++
    ) {
      document.write("PUERTA NUMERO. Y PROPETARIO ");
      document.write(
        "<div>" +
          "NUMERO DE LA PLANTA DEL EDIFICIO ES:" + edificio.plantas[indexPlantas - 1]+" Y EL NUMERO DE PUERTA ES:"+[indexPuertas - 1].numeroPuerta +
          "</div>"
      );
      document.write(
        "<div>" + "EL NOMBRE DEL PROPIETARIO ES:"+ 
          edificio.plantas[indexPlantas - 1][indexPuertas - 1].propietario +
          "</div>"
      );
    }
  }
}
