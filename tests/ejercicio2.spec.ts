import 'mocha';
import {expect} from 'chai';
import {SeriesStreamableCollection} from '../src/ejercicio2';
import {MoviesStreamableCollection} from '../src/ejercicio2';

const myMovies = new MoviesStreamableCollection(['Fight Club', 'Thriller', 1999, 10]);
const myMovies1 = new MoviesStreamableCollection(['Inglourious Baterds', 'Aventura', 2009, 9]);
const mySeries =new SeriesStreamableCollection(['Peaky Blinders','Crimen', 2013, 6, 8.8]);
const mySeries1 =new SeriesStreamableCollection(['The Witcher','Fantásticas', 2019, 2, 8.3]);
const mySeries2 =new SeriesStreamableCollection(['Breaking Bad','Thriller', 2008, 5, 9.5]);

const myMoviesCollection = [myMovies, myMovies1];
const mySeriesCollection = [mySeries, mySeries1, mySeries2];

describe('searchAño function tests', () =>{
    it('search returns value [10, 10]', () =>{
        expect(myMovies.searchAño(1999)).to.be.eql([ 'Fight Club' ]);
    });

    it('search returns value [hola]', () =>{
        expect(mySeries.searchAño(2013)).to.be.eql([ 'Peaky Blinders' ]);
    });

    it('search returns value []', () =>{
        expect(myMovies1.searchNombre('Inglorious Basterds')).to.be.eql(['Inglourious Baterds', 'Aventura', 2009, 9]);
    });

    it('search returns value []', () =>{
        expect(mySeries1.searchNombre('The Witcher')).to.be.eql(['The Witcher','Fantásticas', 2019, 2, 8.3]);
    });

});

describe('getItem function tests', () =>{
    it('getItem() returns value 10', () =>{
        expect(mySeries.getItem(2)).to.be.equal(10);
    });
});

describe('getNumberOfItems function tests', () =>{
    it('getNumberOfItems() returns value 5', () =>{
        expect(mySeries.getNumberOfItems()).to.be.equal(5);
    });
});