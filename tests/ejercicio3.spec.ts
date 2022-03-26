import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio3';
import {Descifrado} from '../src/ejercicio3';

let myMensaje = new Cifrado(['HOLAESTOESUNAPRUEBA', 'CLAVE']);

describe('getNumberOfItems() function tests', () =>{
    it('getNumberOfItems() returns value 2', () =>{
        expect(myMensaje.getNumberOfItems()).to.be.equal(2);
    });
});

describe('getItem function tests', () =>{
    it('getItem() returns value ', () =>{
        expect(myMensaje.getItem(1)).to.be.equal('CLAVE');
    });
});
