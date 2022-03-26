export interface Cesar{
    getItem(index: number): string;
    getNumberOfItems(): number;
}

export abstract class ClaveMensaje implements Cesar{
    constructor(protected items: string[]){
    }
    getItem(index: number): string{
        return this.items[index];
    }

    getNumberOfItems(): number {
        return this.items.length;
    }
}

export class Cifrado extends ClaveMensaje{
    constructor(items: string[]) {
        super(items);
    }
}

export class Descifrado extends ClaveMensaje{
    constructor(items: string[]) {
        super(items);
    }
}

let myMensaje = new Cifrado(['HOLAESTOESUNAPRUEBA', 'CLAVE']);

console.log(myMensaje.getItem(1));
console.log(myMensaje.getNumberOfItems());
