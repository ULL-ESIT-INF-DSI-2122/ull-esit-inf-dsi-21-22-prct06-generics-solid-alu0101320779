import 'mocha';
import {expect} from 'chai';
import {NumericSearchableCollection} from '../src/index';
import {StringSearchableCollection} from '../src/index';

const myCollection =new NumericSearchableCollection([7, 6, 10, 10, 5]);
const myCollection1 = new StringSearchableCollection(['hola', 'adios', 'solid']);

describe('search function tests', () =>{
    it('search returns value [10, 10]', () =>{
        expect(myCollection.search(10)).to.be.equal([ 10, 10 ]);
    });

    it('search returns value [hola]', () =>{
        expect(myCollection1.search('hola')).to.be.equal([ 'hola' ]);
    });

    it('search returns value [10, 10]', () =>{
        expect(myCollection.search(8)).to.be.equal([]);
    });

    it('search returns value [hola]', () =>{
        expect(myCollection1.search('array')).to.be.equal([]);
    });

});