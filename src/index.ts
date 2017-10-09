//import { Gato } from "./model/animal/gato";
//import { Animal } from "./model/animal/animal";
//import { Guepardo } from "./model/animal/guepardo";
import { Animal, Gato,Guepardo } from "./model/animal/animal-module";
import { sayHello } from "./model/animal/functions";

let gato: Animal = new Gato('Misifu');
let guepardo: Guepardo = new Guepardo('Corredor');

gato.mover(2);
guepardo.mover();
/////////////////////////////////////////////////////////////
gato.nombre='Tom';
console.log(gato.nombre);
gato.mover();

sayHello();

console.log ('sayhello', sayHello());