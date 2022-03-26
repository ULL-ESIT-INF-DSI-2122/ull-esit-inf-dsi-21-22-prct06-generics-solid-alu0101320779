---
title: "Práctica 6"
---

> Desarrollo en Sistemas Informáticos
> ------


# Ejercicio 1:
>-----------------------


# Ejercicio DSIFlix

Para la realización de este ejercicio lo que hice fue una interfaz bastante sencilla en la que añado getters de los items y de la longitud del array, una serie de métodos para la búsqueda de películas, series y documentales, ya sea por año, nombre, categorías o novedades, estos métodos recibiran o el `termino: T` para la búsqueda de información o bien no reciben argumentos como puede ser el caso del método `searchNovedades` y devolverán o un tipo `<T>` o un `undefined` en el caso de que no se encuentre lo que haya buscado el usuario.

## Interfaz
```typescript
 export interface Streamable<T> {
    getItem(index: number): T;
    getNumberOfItems(): number;
    searchAño(termino: T): T | undefined;
    searchNombre(termino: T): T | undefined;
    searchNovedades(): T | undefined;
    searchCategoría(termino: T): T | undefined;
  }
```

Se crea la clase abstracta `BasicStreamableCollection<T>` en la que se definen los getters y el método `searchNombre` además de crear los métodos abstractos que se modularán en las clases que extiendan esta clase.

## Clase abstracta
```typescript
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
```
Las clases implementadas que van a extender la clase abstracta anteriormente explicada van a ser tres, en la clase `MoviesStreamableCollection<T>` se va a recibir como argumento un array con la información de la película, en cada uno de los métodos se hacen condicionales `if` en el que se compara si el índice en el que se encuentra la información que se busca coincide con el término de búsqueda. Esto mismo sucede con los demás métodos, se modularán de la misma manera todos los métodos. 

## Películas
```typescript
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
```
## Series
```typescript
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
```
## Documentales
```typescript
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
```
