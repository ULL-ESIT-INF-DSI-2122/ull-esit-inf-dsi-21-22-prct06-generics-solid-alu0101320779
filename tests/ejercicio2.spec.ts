import 'mocha';
import {expect} from 'chai';
import {SeriesStreamableCollection} from '../src/ejercicio2';
import {MoviesStreamableCollection} from '../src/ejercicio2';
import { DocuStreamableCollection } from '../src/ejercicio2';

const myMovies = new MoviesStreamableCollection(['Fight Club', 'Thriller', 1999, 10]);
const myMovies1 = new MoviesStreamableCollection(['Inglourious Baterds', 'Aventura', 2009, 9]);
const myMovies2 = new MoviesStreamableCollection(['Legend', 'Crimen', 2015, 9]);
const myMoviesMal = new MoviesStreamableCollection(['Legend', 'Crimen', '2015', 9]);

const mySeries =new SeriesStreamableCollection(['Peaky Blinders', 2013,'Crimen', 6, 8.8]);
const mySeries1 =new SeriesStreamableCollection(['The Witcher', 2019, 'Fantásticas', 2, 8.3]);
const mySeriesMal =new SeriesStreamableCollection(['Breaking Bad',, '2008', 'Thriller', 5, 9.5]);

const myDocumental =new DocuStreamableCollection(['Líbranos del Mal', 'Documental', 2006, 9.5]);
const myDocumental1 =new DocuStreamableCollection(['Wild Wild Country', 'Documental', 2018, 9.5]);
const myDocumentalMal =new DocuStreamableCollection(['Líbranos del Mal', 'Documental', '2006', 9.5]);

describe('searchAño function tests', () =>{
    it('search returns value Fight Club', () =>{
        expect(myMovies.searchAño(1999)).to.be.equal('Fight Club');
    });

    it('search returns value Peaky Blinders', () =>{
        expect(mySeries.searchAño(2013)).to.be.equal('Peaky Blinders');
    });

    it('search returns value Líbranos de Mal', () =>{
        expect(myDocumental.searchAño(2006)).to.be.equal('Líbranos del Mal');
    });

    it('search returns value undefined', () =>{
        expect(myDocumental.searchAño(2008)).to.be.equal(undefined);
    });
});

describe('searchNombre function tests', () =>{
    it('search returns value Inglourious Baterds', () =>{
        expect(myMovies.searchNombre('Fight Club')).to.be.eql('Fight Club');
    });

    it('search returns value Peaky Blinders', () =>{
        expect(mySeries.searchNombre('Peaky Blinders')).to.be.equal('Peaky Blinders');
    });

    it('search returns value Líbranos de Mal', () =>{
        expect(myDocumental.searchNombre('Líbranos del Mal')).to.be.equal('Líbranos del Mal');
    });
});

describe('searchCategoría function tests', () =>{
    it('search returns value Inglorious Baterds', () =>{
        expect(myMovies1.searchCategoría('Aventura')).to.be.equal('Inglourious Baterds');
    });

    it('search returns value Líbranos de Mal', () =>{
        expect(myDocumental.searchCategoría('Documental')).to.be.equal('Líbranos del Mal');
    });

    it('search returns value undefined', () =>{
        expect(myDocumental.searchCategoría('Documental de naturaleza')).to.be.equal(undefined);
    });
});

describe('searchNovedades function tests', () =>{
    it('search returns value Inglorious Baterds', () =>{
        expect(myMovies1.searchNovedades()).to.be.equal(undefined);
    });

    it('search returns value The Witcher', () =>{
        expect(mySeries1.searchNovedades()).to.be.equal('The Witcher');
    });

    it('search returns value Inglorious Baterds', () =>{
        expect(myMovies2.searchNovedades()).to.be.equal('Legend');
    });

    it('search returns value undefined', () =>{
        expect(myDocumental.searchNovedades()).to.be.equal(undefined);
    });

    it('search returns value undefined', () =>{
        expect(mySeriesMal.searchNovedades()).to.be.equal(undefined);
    });

    it('search returns value undefined', () =>{
        expect(myMoviesMal.searchNovedades()).to.be.equal(undefined);
    });

    it('search returns value Wild Wild Country', () =>{
        expect(myDocumental1.searchNovedades()).to.be.equal('Wild Wild Country');
    });

    it('search returns value undefined', () =>{
        expect(myDocumentalMal.searchNovedades()).to.be.equal(undefined);
    });

});

describe('getItem function tests', () =>{
    it('getItem() returns value 10', () =>{
        expect(mySeries.getItem(2)).to.be.equal('Crimen');
    });
});

describe('getNumberOfItems function tests', () =>{
    it('getNumberOfItems() returns value 5', () =>{
        expect(mySeries.getNumberOfItems()).to.be.equal(5);
    });
});


