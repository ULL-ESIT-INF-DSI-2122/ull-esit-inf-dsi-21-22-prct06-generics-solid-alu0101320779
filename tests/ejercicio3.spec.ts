import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio3';


let myMensaje = new Cifrado('HOLAESTOESUNAPRUEBA', 'CLAVE');
let myCifrado = new Cifrado(myMensaje.code(), 'CLAVE');
describe('getters function tests', () =>{
    it('getMensaje() returns value HOLAESTOESUNAPRUEBA', () =>{
        expect(myMensaje.getMensaje()).to.be.equal('HOLAESTOESUNAPRUEBA');
    });

    it('getClave() returns value ', () =>{
        expect(myMensaje.getClave()).to.be.equal('CLAVE');
    });
});

describe('code() function tests', () =>{
    it('code() returns value KAMWJVFPAXXYBMWXPCW', () =>{
        expect(myMensaje.code()).to.be.equal('KAMWJVFPAXXYBMWXPCW');
    });
});

describe('decode function tests', () =>{
    it('decode() returns value HOLAESTOESUNAPRUEBA', () =>{
        expect(myCifrado.decode()).to.be.equal('HOLAESTOESUNAPRUEBA');
    });
});
