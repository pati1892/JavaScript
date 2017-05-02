//Quelle: https://developer.mozilla.org/de/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

//Nur Einfachvererbung möglich
//Instanz der "parent" Klasse (Basis), wird der "child" Klasse zugewiesen und spezialisiert

var Person = function (firstname) {
    this.firstname = firstname;
    console.log("Instanz Person erstellt: " + this.firstname);
}

Person.prototype.sayHello = function () {
    console.log("Hello, I´m " + this.firstname);
};

Person.prototype.walk = function () {
    console.log(this.firstname + " is walking");
};

//Student Konstruktor definieren
var Student = function (firstname, subject) {
    //Rufe parent Konstruktor
    //Über Function#call sicherstellen, dass "this" korrekt gesetzt wird
    Person.call(this, firstname);

    //Student spezifische Eigenschaften setzen
    this.subject = subject;
}

//Erstelle Student.prototype Objekt, das vom Person.prototype erbt
//Kein new Person() !
Student.prototype = Object.create(Person.prototype);

//Setze "constructor" Eigenschaft um auf Studnet zu referenzieren
Student.prototype.constructor = Student;

//Ersetze die sayHello() Methode
Student.prototype.sayHello = function () {
    console.log("Hello, I´m " + this.firstname + ". I´m studying " + this.subject + ".");
};

//Füge die "sayGoodBye" Methode hinzu
Student.prototype.sayGoodBye = function () {
    console.log("Goodbye! " + this.firstname);
};

//Instanzierung
var student1 = new Student("Gerhard", "Informatik");
student1.sayHello();
student1.sayGoodBye();
student1.walk();

//Check liskov
console.log(student1 instanceof Person);
console.log(student1 instanceof Student);

//Kopiere Prototype ohne Object.create
function createObject(proto) {
    function Ctor() {}
    Ctor.prototype = proto;
    return new Ctor();
}
Student.prototype = createObject(Person.prototype);