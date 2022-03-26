/**
 * @interface Cesar Esta interfaz crea los getters y los métodos básicos que van a tener sus subclases
 */
export interface Cesar {
    getMensaje(): string;
    getClave(): string;
    code(): string;
    decode(): string;
}
/**
 * @class Esta clase hereda de `Cesar` y recibe por el constructor el mensaje y la clave para cifrar o descifrar.
 * @param mensaje Mensaje que recibe para cifrar o descifrar.
 * @param clave Clave para cifrar o descifrar el mensaje.
 */
export abstract class ClaveMensaje implements Cesar {
    constructor(protected mensaje: string, protected clave: string) {
    }
    /**
     * Getter del mensaje a cifrar
     * @returns El mensaje introducido
     */
    getMensaje(): string {
        return this.mensaje;
    }
    /**
     * Getter de la clave para cifrar o descifrar
     * @returns La clave introducida
     */
    getClave(): string {
        return this.clave;
    }
    /**
     * Métodos abstractos para codificar y decodificar
     */
    abstract code(): string;
    abstract decode(): string;
}
/**
 * @class Extiende la clase abstracta para cifrar y descifrar
 * @constructor Se recibe el mensaje y la clave para codificar/decodificar
 */
export class Cifrado extends ClaveMensaje {
    constructor(mensaje: string, clave: string) {
        super(mensaje, clave);
    }
    /**
     * Método para rellenar la clave en el caso de que tenga menor longitud que el mensaje
     * @returns El mensaje relleno
     */
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
    /**
     * Codifica el mensaje con la clave aportada.
     * @returns El mensaje ya cifrado.
     */
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
    /**
     * Decodifica el mensaje introducido con la clave aportada
     * @returns El mensaje decodificado.
     */
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