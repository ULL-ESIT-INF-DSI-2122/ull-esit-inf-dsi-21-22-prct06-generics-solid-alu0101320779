export interface Cesar {
    getMensaje(): string;
    getClave(): string;
    code(): string;
    decode(): string;
}

export abstract class ClaveMensaje implements Cesar {
    constructor(protected mensaje: string, protected clave: string) {
    }
    getMensaje(): string {
        return this.mensaje;
    }
    getClave(): string {
        return this.clave;
    }

    abstract code(): string;
    abstract decode(): string;
}

export class Cifrado extends ClaveMensaje {
    constructor(mensaje: string, clave: string) {
        super(mensaje, clave);
    }

    private refill(): string {
        let newClave = '';
        for (let i = 0; i < this.mensaje.length; i++) {
            for (let j = 0; j < this.clave.length; j++) {
                if (newClave.length === this.mensaje.length) {
                    return newClave
                }
                newClave += this.clave.charAt(j);
            }
        }
        return newClave;
    }

    code(): string {
        let alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        let msjcifrado = '';
        let newClave = '';
        if (this.mensaje.length > this.clave.length) {
            newClave = this.refill();
        }
        for (let i = 0; i < this.mensaje.length; i++) {
            for (let j = 0; j < alfabeto.length; j++) {
                if (this.mensaje.charAt(i) === alfabeto.charAt(j)) {
                    for (let k = 0; k < alfabeto.length; k++) {
                        if (newClave.charAt(i) === alfabeto.charAt(k)) {
                            msjcifrado += alfabeto.charAt((j + k+1)%27);
                        }
                    }
                }
            }
        }
        return msjcifrado;
    }

    decode(): string{
        let alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        let msjdescifrado = '';
        let newClave = '';
        if (this.mensaje.length > this.clave.length) {
            newClave = this.refill();
        }
        for (let i = 0; i < this.mensaje.length; i++) {
            for (let j = 0; j < alfabeto.length; j++) {
                if (this.mensaje.charAt(i) === alfabeto.charAt(j)) {
                    for (let k = 0; k < alfabeto.length; k++) {
                        if (newClave.charAt(i) === alfabeto.charAt(k)) {
                            msjdescifrado += alfabeto.charAt((j + (27 - (k+1)))%27);
                        }
                    }
                }
            }
        }
        return msjdescifrado;
    }

}

let myMensaje = new Cifrado('HOLAESTOESUNAPRUEBA', 'CLAVE');
let myCifrado = new Cifrado(myMensaje.code(), 'CLAVE');
console.log(`${myMensaje.code()}`);
console.log(`${myCifrado.decode()}`);