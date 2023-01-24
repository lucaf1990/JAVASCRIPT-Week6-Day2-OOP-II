/*
//**********************     LE CLASSI     ***********************  */

//Java Script è un linguaggio di programmazione ad oggetti

//Si basa su concetti di prototipo ogni oggetto ha un riferimento dentro di se all'oggetto da cui deriva

//Gli altri linguaggi di programmazione sono basati sulle classi, in javascript possiamo creare degli stampini che poi possiamo modificare con il prototype, gli altri linguaggi lavorano con le classi sono come gli stampini di Javascript che permettono di estendere le funzionalità principali creando delle sottoclass. Java ci permette di avere oggetti senza aver creato uno stampino, negli altri linguaggi no, prima devi avere lo stampino e da li nasce l'oggetto.

//Anche Javascript nel 2016 ha introdotto le classi. Ma comunque Javascript funziona con i prototipi

//Negli altri linguaggi non si può modificare uno stampino dopo che è stato creato in Javascript si. 7

class Person {
  //per definire la classe si usa class nome class e si aprono le parentesi e si inserisce constructor che è una funzione
  //sempre in Pascal Case
  constructor(name, surname) {
    // è solo constructor senza let const o altro
    this.name = name;
    this.surname = surname;
    this.email = ""; //forniamo nome e cognome ma non la email verrà inizializzata dopo
  }
}

// come si usa una clase

let marioRossi = new Person("Mario ", "Rossi");

// per iniziallizare la email
marioRossi.email = "mariorossi@gmail.com";
console.log(marioRossi);

let luigiVerdi = new Person("Luigi", "Verdi");

class House {
  constructor(sqaureMeters, numberOfRooms) {
    this.sqaureMeters = sqaureMeters;
    this.numberOfRooms = numberOfRooms;
  }

  //NELLE CLASSI PROPIETA' E METODI SI DICHIARANO SENZA INIZIALIZZAZIONE NO LET NO CONST
  generateReport() {
    //E un metodo ogni casa avra m2 numero di stanze e una funzionalità che stampa i valori
    //non esiste nella classe è un metodo ed è parte delle istanze e fa parte solo di bigHouse
    //fa parte delle istanze delle mie classi
    return (
      " Ciao! Sono una casa grande " +
      this.sqaureMeters +
      " metri quadrati e ho " +
      this.numberOfRooms +
      " camere."
    );
  }
}
let bigHouse = new House(130, 6);
console.log(bigHouse.generateReport());

let monolocale = new House(40, 2);
console.log(monolocale.generateReport());

//SOTTO CLASSI E EREDITARIETA'

//Grazie alla struttura a classi scopriamo quando è facile estendere una classe per creare una sottovariante
//Concetto di riusabilità

// class Developer{
//     constructor(){
//         name:                 //queste tre propietà le abbiamo già dichiarate in un altra classe la classe person
//         surname:              // quindi possiamo creare una classe developer a partire da un altra classe
//         email:
//         knownLanguages:
//     }
// }

class Developer extends Person {
  constructor(name, surname, knownLanguages) {
    super(name, surname); ///inovca il costruttore della classe da cui estende super perchè sta sopra
    this.knownLanguages = knownLanguages;
  }
}

let marioDev = new Developer("Mario", "Rossi", ["C#", "Html"]);
console.log(marioDev);

class SeniorDeveloper extends Developer {
  constructor(name, surname, knownLanguages, favouriteLang) {
    super(name, surname, knownLanguages);
    this.favouriteLang = favouriteLang;
  }
  showOff() {
    return "i'm an experinced developer";
  }
}

let marioSeniorDveloper = new SeniorDeveloper(
  "Mario",
  "Rossi",
  ["C#", "Html"],
  "typeScript"
);

console.log(marioSeniorDveloper.showOff());

class Computer {
  constructor(brand) {
    this.brand = brand;
  }
  showBrand() {
    return "Ho un pc " + this.brand;
  }
}

let newPc = new Computer("Apple");
console.log(newPc.showBrand());

//questa classe si può utilizzare da solo

class ComputerModel extends Computer {
  //stiamo estendendo da Computer quindi ogni ComputerModel avrà Model e ShowBrand
  constructor(brand, model) {
    super(brand);
    this.model = model; // estende dalla classe Computer
  }
  showComplete() {
    return this.showBrand() + ", IL MODELLO E' " + this.model;
  }
}

let macBookPro = new ComputerModel("Apple", "MacBook Pro");
//model è una propietà dei computer Model
console.log(macBookPro.showComplete());

let inputReference = document.getElementById("newEl");
let buttonReference = document.querySelector("button");
let listReferenxe = document.getElementById("elementList");

let elements = []; //inizializzo per avere uno spazio per salvare gli elementi, lista elementi aggiunti con button
//let elements: element[]

class ListElement {
  constructor(name) {
    this.name = name;
  }
}

//element sarà una classe con lo stampino che genera delle istanze tutte simili
//oggetti con una solo poropietà di nome name: {name: carota}{name: latte}

// buttonRweference.addEventListener("click", function (){})

const renderList = function () {
  listReferenxe.innerHTML = ""; //puliamo la lista ogni volta che la ricreiamo
  elements.forEach((el) => {
    let newLi = document.createElement("li");
    newLi.innerText = el.name;
    listReferenxe.appendChild(newLi);
  });
};

buttonReference.onclick = () => {
  console.log("click");
  //step 1 creare una nuova istanza di element a partire dal valore dell'input field
  let elemento = new ListElement(inputReference.value);
  //step 2 devo andare a metterlo nell'arrey che accetta oggetti di questo tipo
  elements.push(elemento);
  //step 3 ciclare l'arrey per appenderlo al
  renderList();
  inputReference.value = ""; //resttiamo l'input field
  inputReference.focus();
};
