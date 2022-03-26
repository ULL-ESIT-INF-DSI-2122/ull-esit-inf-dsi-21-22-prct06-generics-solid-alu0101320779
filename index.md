---
title: "Práctica 6"
---

> Desarrollo en Sistemas Informáticos
> ------


# Ejercicio 1:
>-----------------------


# Ejercicio DSIFlix
Interfaz
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
Clase abstracta
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

Subclases
Películas
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
Series
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
Documentales
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
