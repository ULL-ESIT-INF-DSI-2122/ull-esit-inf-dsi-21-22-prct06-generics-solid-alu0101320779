import 'mocha';
import {expect} from 'chai';
import {NumericSearchableCollection} from '../src/index';
import {StringSearchableCollection} from '../src/index';

const myCollection =new NumericSearchableCollection([7, 6, 10, 10, 5]);
const myCollection1 = new StringSearchableCollection(['hola', 'adios', 'solid']);
const myCollection3 =new NumericSearchableCollection([7, 6, 10, 10, 5]);
const myCollection4 =new NumericSearchableCollection([7, 6, 10, 10, 5]);

myCollection3.addItem(7)
myCollection4.removeItem(2)

describe('search function tests', () =>{
    it('search returns value [10, 10]', () =>{
        expect(myCollection.search(10)).to.be.eql([ 10, 10 ]);
    });

    it('search returns value [hola]', () =>{
        expect(myCollection1.search('hola')).to.be.eql([ 'hola' ]);
    });

    it('search returns value []', () =>{
        expect(myCollection.search(8)).to.be.eql([]);
    });

    it('search returns value []', () =>{
        expect(myCollection1.search('array')).to.be.eql([]);
    });

});

describe('addItem function tests', () =>{
    it('getNumberOfItems() returns value 6', () =>{
        expect(myCollection3.getNumberOfItems()).to.be.equal(6);
    });
});

describe('getItem function tests', () =>{
    it('getItem() returns value 10', () =>{
        expect(myCollection.getItem(2)).to.be.equal(10);
    });
});

describe('removeItem function tests', () =>{
    it('removeItem() delete a value ', () =>{
        expect(myCollection4.getItem(2)).to.be.equal(undefined);
    });
});