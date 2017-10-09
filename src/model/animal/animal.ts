import { LONGITUD_MINIMA } from "./constansts";
export class Animal {
    protected _nombre: string;
   // public static LONGITUD_MINIMA :number=3; esto lleve a mi otro archivo de constantes

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    mover(distancia: number = 0) {
        console.log(`${this._nombre} se movio ${distancia}m.`);
    }
    //public getNombre():string{
    get nombre(): string {
        return '$'+this._nombre;
    }
    //public setNombre(nombre: string): void {
    set nombre(nombre: string) {
        if (nombre.length <=LONGITUD_MINIMA){
            console.error('ERROR, nombre muy corto');
            return;
        }
        console.log ('setnombre' , nombre )
        this._nombre = nombre
    }
}








