//Quelle: https://developer.mozilla.org/de/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

//Konstruktorfunktion,
//Methode der Klasse,
//Jede deklarierte Anweisung in der Klasse wird beim Instanzieren ausgeführt
var Person = function (firstname) {
    //Eigenschaft, referenziert aktuelles Objekt
    this.firstName = firstname;
    //Um auf Eigenschaft im aktuellen Objekt zu referenzieren, this notwendig
    console.log("Instanz Person erstellt: " + this.firstName);
}
//Methoden, anlegen im Prototypeobject der Klasse
//Gewöhnliche Funktionsobjekte, sind als Eigenschaft an Objekt gebunden, können daher auch von ausßerhalb aufgerufen werden
Person.prototype.sayHello = function () {
    console.log("Hello, I´m " + this.firstName);
}



//Anlegen von Instanzen Person
var person1 = new Person("Patrick");
var person2 = new Person("Linda");
var person3 = new Person("Sophia");

//Zugriff auf Methode der Klasse
person1.sayHello();
person2.sayHello();


//Zugriff auf Methode außerhalb des Objekts
//Referenz
var helloFunction = person1.sayHello;

//TypeError im strict mode
//this == window, besitz keine Eigenschaft firstname
helloFunction();


//this, über call Methode setzen
helloFunction.call(person1);

