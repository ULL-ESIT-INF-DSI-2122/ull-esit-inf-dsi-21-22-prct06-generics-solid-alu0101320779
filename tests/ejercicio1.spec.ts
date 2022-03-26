import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio1';

let figther = new Pokemon('POKEMON', 'Bulbasaur', [6.9, 0.7], [45,49,49,65,65,45], 'GRASS')

describe('getters Fighter function tests', () =>{
    it('getName returns value Bulbasaur', () =>{
        expect(figther.getName()).to.be.equal('Bulbasaur');
    });

    it('getPesoAltura returns value [6.9, 0.7]', () =>{
        expect(figther.getPesoAltura()).to.be.eql([6.9, 0.7]);
    });

    it('getUniverso returns value Pokemon', () =>{
        expect(figther.getUniverso()).to.be.equal('POKEMON');
    });

    it('getStats returns value [45,49,49,65,65,45]', () =>{
        expect(figther.getStats()).to.be.eql([45,49,49,65,65,45]);
    });
});

describe('getters Pokemon function tests', () =>{
    it('getTipo returns value GRASS', () =>{
        expect(figther.getTipo()).to.be.equal('GRASS');
    });
});