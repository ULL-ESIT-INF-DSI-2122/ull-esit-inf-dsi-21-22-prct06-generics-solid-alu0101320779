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
 * @class La clase sirve para llevar a cabo la búsqueda de películas con filtros, hereda de la clase abstracta.
 * @param items Se recibe los datos de la película.
 */
export class MoviesStreamableCollection<T> extends BasicStreamableCollection<T>{
    constructor(items: T[]) {
        super(items);
      }
    /**
     * @method searchAño El método busca la coincidencia en el índice en el que está el año
     * con el `termino` de búsqueda y lo devuelve.
     * @param termino Año por el que se hará la búsqueda.
     * @returns Devuelve el nombre de la película que se haya publicado en el año del termino.
     */
    searchAño(termino: T): T | undefined {
        if (this.items[2] === termino){
            return this.items[0];
        } 
        return undefined;
    }
    /**
     * @method searchNovedades El método mira si el año de publicación de la película es mayor que 2015
     * en el caso de que se cumpla esta condición es una novedad.
     * @returns Las películas publicadas después del 2015 o undefined en el caso de que no hayan novedades.
     */
    searchNovedades(): T | undefined{
        if ( typeof this.items[2] === 'number' ){
            if ( this.items[2] >= 2015){
                return this.items[0]
            }
        }
        return undefined
    }
    /**
     * @method searchCategoría El método busca la coincidencia en el índice en el que está la categoría
     * con el `termino` de búsqueda y lo devuelve.
     * @param termino Palabra de búsqueda.
     * @returns La película con esa categoría o undefined en el caso de que no se encuentre esa categoría.
     */
    searchCategoría(termino: T): T | undefined{
        if ( this.items[1] === termino ){
            return this.items[0]
        }
        return undefined
    }
}

/**
 * @class La clase sirve para llevar a cabo la búsqueda de series con filtros, hereda de la clase abstracta.
 * @param items Se recibe los datos de la series.
 */
export class SeriesStreamableCollection<T> extends BasicStreamableCollection<T>{
    constructor(items: T[]) {
        super(items);
      }
    /**
     * @method searchAño El método busca la coincidencia en el índice en el que está el año
     * con el `termino` de búsqueda y lo devuelve.
     * @param termino Año por el que se hará la búsqueda.
     * @returns Devuelve el nombre de la serie que se haya publicado en el año del termino.
     */
    searchAño(termino: T): T | undefined {
        if (this.items[1] === termino){
            return this.items[0];
        } 
        return undefined;
    }
    /**
     * @method searchNovedades El método mira si el año de publicación de la serie es mayor que 2015 
     * en el caso de que se cumpla esta condición es una novedad.
     * @returns Las series publicadas después del 2015 o undefined en el caso de que no hayan novedades.
     */
    searchNovedades(): T | undefined{
        if ( typeof this.items[1] === 'number' ){
            if ( this.items[1] >= 2015){
                return this.items[0]
            }
        }
        return undefined
    }
    /**
     * @method searchCategoría El método busca la coincidencia en el índice en el que está la categoría
     * con el `termino` de búsqueda y lo devuelve.
     * @param termino Palabra de búsqueda.
     * @returns La serie con esa categoría o undefined en el caso de que no se encuentre esa categoría.
     */
    searchCategoría(termino: T): T | undefined{
        if ( this.items[2] === termino ){
            return this.items[0]
        }
        return undefined
    }
}
/**
 * @class La clase sirve para llevar a cabo la búsqueda de documentales con filtros, hereda de la clase abstracta.
 * @param items Se recibe los datos de la documentales.
 */
export class DocuStreamableCollection<T> extends BasicStreamableCollection<T>{
    constructor(items: T[]) {
        super(items);
    }
    /**
     * @method searchAño El método busca la coincidencia en el índice en el que está el año
     * con el `termino` de búsqueda y lo devuelve.
     * @param termino Año por el que se hará la búsqueda.
     * @returns Devuelve el nombre del documental que se haya publicado en el año del termino.
     */
    searchAño(termino: T): T | undefined {
        if (this.items[2] === termino){
            return this.items[0];
        } 
        return undefined;
    }
    /**
     * @method searchNovedades El método mira si el año de publicación de la documentales es mayor que 2015 
     * en el caso de que se cumpla esta condición es una novedad.
     * @returns Los documentales publicados después del 2015 o undefined en el caso de que no hayan novedades.
     */
    searchNovedades(): T | undefined{
        if ( typeof this.items[2] === 'number' ){
            if ( this.items[2] >= 2015){
                return this.items[0]
            }
        }
        return undefined
    }
    /**
     * @method searchCategoría El método busca la coincidencia en el índice en el que está la categoría
     * con el `termino` de búsqueda y lo devuelve.
     * @param termino Palabra de búsqueda.
     * @returns El documental con esa categoría o undefined en el caso de que no se encuentre esa categoría.
     */
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