//Quelle: https://developer.mozilla.org/de/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

//Konstruktorfunktion,
//Methode der Klasse,
//Jede deklarierte Anweisung in der Klasse wird beim Instanzieren ausgef�hrt
var Person = function (firstname) {
    //Eigenschaft, referenziert aktuelles Objekt
    this.firstName = firstname;
    //Um auf Eigenschaft im aktuellen Objekt zu referenzieren, this notwendig
    console.log("Instanz Person erstellt: " + this.firstName);
}
//Methoden, anlegen im Prototypeobject der Klasse
//Gew�hnliche Funktionsobjekte, sind als Eigenschaft an Objekt gebunden, k�nnen daher auch von aus�erhalb aufgerufen werden
Person.prototype.sayHello = function () {
    console.log("Hello, I�m " + this.firstName);
}



//Anlegen von Instanzen Person
var person1 = new Person("Patrick");
var person2 = new Person("Linda");
var person3 = new Person("Sophia");

//Zugriff auf Methode der Klasse
person1.sayHello();
person2.sayHello();


//Zugriff auf Methode au�erhalb des Objekts
//Referenz
var helloFunction = person1.sayHello;

//TypeError im strict mode
//this == window, besitz keine Eigenschaft firstname
helloFunction();


//this, �ber call Methode setzen
helloFunction.call(person1);

