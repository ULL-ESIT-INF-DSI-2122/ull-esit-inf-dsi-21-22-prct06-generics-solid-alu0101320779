/**
 * @interface Streamable Con esta interfaz establecemos la estructura que van a tener las subclases que lo 
 * implementen y lo extiendan.
 */
 export interface Streamable<T> {
    getItem(index: number): T;
    getNumberOfItems(): number;
    searchAño(termino: T): T | undefined;
    searchNombre(termino: T): T | undefined;
    searchNovedades(): T | undefined;
    searchCategoría(termino: T): T | undefined;
  }
  /**
   * BasicStreamableCollection es una clase abstracta con la que implementa la interfaz Streamable 
   * @constructor por el constructor recibimos un `array` con los datos de la serie o película
   * @function getItem Este getter nos servirá si queremos saber cuál es el nombre de una película o serie
   * por ejemplo.
   * @function getNumberOfItems Servirá en el caso de que querramos implementar un método para saber si los datos 
   * introducidos para una película o serie son correctos en el caso de que no se introduzcan el número de items 
   * correctos no dejará añadir una película o serie
   * @abstract Creamos los métodos abstractos `searchAño`, `searchNombre`, `searchNovedades`, `searchCategoría` 
   * para poder modelarlos en cada clase
   */
  export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(protected items: T[]){
    }

    getItem(index: number): T{
        return this.items[index];
    }

    getNumberOfItems(): number {
        return this.items.length;
    }

    searchNombre(termino: T): T | undefined {
        if ( this.items[0] === termino ){
            return this.items[0]
        }
        return undefined
    }

    abstract searchAño(termino: T): T | undefined;
    abstract searchNovedades(): T | undefined;
    abstract searchCategoría(termino: T): T | undefined;
}
/**
 * @class La clase sirve para llevar a cabo la búsqueda de películas con filtros, hereda de la clase abstracta 
 * @param items Se recibe los datos de la película
 * @method searchAño El método busca la coincidencia en el índice en el que está el año
 * con el `termino` de búsqueda y lo devuelve.
 * @method searchCategoría El método busca la coincidencia en el índice en el que está la categoría
 * con el `termino` de búsqueda y lo devuelve.
 * @method searchNovedades El método mira si el año de publicación de la película es mayor que 2015 
 * en el caso de que se cumpla esta condición es una novedad
 */
export class MoviesStreamableCollection<T> extends BasicStreamableCollection<T>{
    constructor(items: T[]) {
        super(items);
      }
    
    searchAño(termino: T): T | undefined {
        if (this.items[2] === termino){
            return this.items[0];
        } 
        return undefined;
    }

    searchNovedades(): T | undefined{
        if ( typeof this.items[2] === 'number' ){
            if ( this.items[2] >= 2015){
                return this.items[0]
            }
        }
        return undefined
    }

    searchCategoría(termino: T): T | undefined{
        if ( this.items[1] === termino ){
            return this.items[0]
        }
        return undefined
    }
}

/**
 * @class La clase sirve para llevar a cabo la búsqueda de series con filtros, hereda de la clase abstracta 
 * @param items Se recibe los datos de la series
 * @method searchAño El método busca la coincidencia en el índice en el que está el año
 * con el `termino` de búsqueda y lo devuelve.
 * @method searchCategoría El método busca la coincidencia en el índice en el que está la categoría
 * con el `termino` de búsqueda y lo devuelve.
 * @method searchNovedades El método mira si el año de publicación de la serie es mayor que 2015 
 * en el caso de que se cumpla esta condición es una novedad.
 */
export class SeriesStreamableCollection<T> extends BasicStreamableCollection<T>{
    constructor(items: T[]) {
        super(items);
      }
    
    searchAño(termino: T): T | undefined {
        if (this.items[1] === termino){
            return this.items[0];
        } 
        return undefined;
    }

    searchNovedades(): T | undefined{
        if ( typeof this.items[1] === 'number' ){
            if ( this.items[1] >= 2015){
                return this.items[0]
            }
        }
        return undefined
    }

    searchCategoría(termino: T): T | undefined{
        if ( this.items[2] === termino ){
            return this.items[0]
        }
        return undefined
    }
}
/**
 * @class La clase sirve para llevar a cabo la búsqueda de documentales con filtros, hereda de la clase abstracta 
 * @param items Se recibe los datos de la documentales
 * @method searchAño El método busca la coincidencia en el índice en el que está el año
 * con el `termino` de búsqueda y lo devuelve.
 * @method searchCategoría El método busca la coincidencia en el índice en el que está la categoría
 * con el `termino` de búsqueda y lo devuelve.
 * @method searchNovedades El método mira si el año de publicación de la documentales es mayor que 2015 
 * en el caso de que se cumpla esta condición es una novedad
 */
export class DocuStreamableCollection<T> extends BasicStreamableCollection<T>{
    constructor(items: T[]) {
        super(items);
    }
    searchAño(termino: T): T | undefined {
        if (this.items[2] === termino){
            return this.items[0];
        } 
        return undefined;
    }

    searchNovedades(): T | undefined{
        if ( typeof this.items[2] === 'number' ){
            if ( this.items[2] >= 2015){
                return this.items[0]
            }
        }
        return undefined
    }

    searchCategoría(termino: T): T | undefined{
        if ( this.items[1] === termino ){
            return this.items[0]
        }
        return undefined
    }
}

const myMovies = new MoviesStreamableCollection(['Fight Club', 'Thriller', 1999, 10]);
const myMovies1 = new MoviesStreamableCollection(['Inglourious Baterds', 'Aventura', 2009, 9]);
const mySeries =new SeriesStreamableCollection(['Peaky Blinders', 2013, 'Crimen', 6, 8.8]);
const mySeries1 =new SeriesStreamableCollection(['The Witcher', 2019, 'Fantásticas', 2, 8.8]);
const mySeries2 =new SeriesStreamableCollection(['Breaking Bad', 2008, 'Thriller', 5, 9.5]);
const myDocumental =new DocuStreamableCollection(['Líbranos del Mal', 'Documental', 2006, 9.5]);

const myMoviesCollection = [myMovies, myMovies1];
const mySeriesCollection = [mySeries, mySeries1, mySeries2];

//--------------------------------------------

console.log('Búsqueda de películas:');
console.log('Películas de 1999');
myMoviesCollection.forEach(movies => {
    console.log(movies.searchAño(1999));
});
console.log('Películas de aventura');
myMoviesCollection.forEach(movies => {
    console.log(movies.searchCategoría('Aventura')); 
});
console.log('Búsqueda por nombre Fight club');
myMoviesCollection.forEach(movies => {
    console.log(movies.searchNombre('Fight Club')); 
});
console.log('Búsqueda de novedades');
myMoviesCollection.forEach(movies => {
    console.log(movies.searchNovedades()); 
});

//--------------------------------------------

console.log('Búsqueda de series:');
console.log('Series de 2008');
mySeriesCollection.forEach(series => {
    console.log(series.searchAño(2008)); 
});
console.log('Series de thriller');
mySeriesCollection.forEach(series => {
    console.log(series.searchCategoría('Thriller')); 
});
console.log('Búsqueda por nombre Peaky Blinders');
mySeriesCollection.forEach(series => {
    console.log(series.searchNombre('Peaky Blinders')); 
});
console.log('Búsqueda de novedades');
mySeriesCollection.forEach(series => {
    console.log(series.searchNovedades()); 
});

//--------------------------------------------

console.log('Búsqueda de doumental:');
console.log('Documental de 2006');
console.log(myDocumental.searchAño(2006)); 
console.log('Documentales');
console.log(myDocumental.searchCategoría('Documental')); 
console.log('Búsqueda por nombre Líbranos del Mal');
console.log(myDocumental.searchNombre('Líbranos del Mal')); 
console.log('Búsqueda de novedades');
console.log(myDocumental.searchNovedades()); 