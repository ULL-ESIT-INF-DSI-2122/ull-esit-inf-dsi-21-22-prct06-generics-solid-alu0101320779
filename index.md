---
title: "Práctica 6"
---

> Desarrollo en Sistemas Informáticos
> ------


# Ejercicio 1:
>-----------------------

# Ejercicio DSIFlix
## Interfaz
Para la realización de este ejercicio lo que hice fue una interfaz bastante sencilla en la que añado getters de los items y de la longitud del array, una serie de métodos para la búsqueda de películas, series y documentales, ya sea por año, nombre, categorías o novedades, estos métodos recibiran o el `termino: T` para la búsqueda de información o bien no reciben argumentos como puede ser el caso del método `searchNovedades` y devolverán o un tipo `<T>` o un `undefined` en el caso de que no se encuentre lo que haya buscado el usuario.

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
## Clase abstracta
Se crea la clase abstracta `BasicStreamableCollection<T>` en la que se definen los getters y el método `searchNombre` además de crear los métodos abstractos que se modularán en las clases que extiendan esta clase.

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
## Películas
Las clases implementadas que van a extender la clase abstracta anteriormente explicada van a ser tres, en la clase `MoviesStreamableCollection<T>` se va a recibir como argumento un array con la información de la película, en cada uno de los métodos se hacen condicionales `if` en el que se compara si el índice en el que se encuentra la información que se busca coincide con el término de búsqueda. Esto mismo sucede con los demás métodos, se modularán de la misma manera todos los métodos. 

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

# Ejercicio El cifrado indescifrable
## Interfaz
Para llevar a cabo este ejercicio se crea una estructura de código que cuenta con una interfaz `Cesar` esta interfaz tiene los getters `getMensaje()` y `getClave()` además de los métodos `code()` y `decode()`. 

```typescript
export interface Cesar {
    getMensaje(): string;
    getClave(): string;
    code(): string;
    decode(): string;
}
```
## Clase abstracta
Se implementa una clase abstracta `ClaveMensaje` que implementa la interfaz `Cesar`, en el constructor se recibe el mensaje a cifrar/descifrar y la clave, los dos se van a recibir como `string`, en esta clase se desarrollan los `getters` y se declaran como métodos abstractos a `code()` y `decode()`.

```typescript
export abstract class ClaveMensaje implements Cesar {
    constructor(protected mensaje: string, protected clave: string) {
    }
    getMensaje(): string {
        return this.mensaje;
    }
    getClave(): string {
        return this.clave;
    }

    abstract code(): string;
    abstract decode(): string;
}
```
## Método code()
En el método `code()` lo que se hace es comprobar si la clave introducida es de menor tamaño que el mensaje a cifrar en el caso de que sea así se hará uso del método `refill` para rellenar un `string` con la clave introducida hasta que sea del mismo tamaño la clave y el mensaje, más adelante recorremos el mensaje carácter a carácter con un `for`, cada vez que se lea una letra de la clave se recorrerá el alfabeto para encontrar la coincidencia, cuando se encuentre la coincidencia buscará la coincidencia con la clave dentro del alfabeto con otro `for` y cuando lo encuentre se guardará en la variable `msjcifrado` el carácter del alfabeto de índice `(j + k+1)mod 27` para al final del bucle devolverla.

```typescript
code(): string {
        let alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        let msjcifrado = '';
        let newClave = '';
        if (this.mensaje.length > this.clave.length) {
            newClave = this.refill();
        }
        for (let i = 0; i < this.mensaje.length; i++) {
            for (let j = 0; j < alfabeto.length; j++) {
                if (this.mensaje.charAt(i) === alfabeto.charAt(j)) {
                    for (let k = 0; k < alfabeto.length; k++) {
                        if (newClave.charAt(i) === alfabeto.charAt(k)) {
                            msjcifrado += alfabeto.charAt((j + k+1)%27);
                        }
                    }
                }
            }
        }
        return msjcifrado;
    }
```
## Método decode()
El método `decode()` es prácticamente igual al método `code()` en lo único que se diferencian es que a la hora de guardar el carácter cifrado en vez de acceder al carácter del alfabeto de índice `(j + k+1)mod 27` accederá al índice `(j + (27 - (k+1)))mod 27` para acceder al contrario que accedemos en `code()`

```typescript
    decode(): string{
        let alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        let msjdescifrado = '';
        let newClave = '';
        if (this.mensaje.length > this.clave.length) {
            newClave = this.refill();
        }
        for (let i = 0; i < this.mensaje.length; i++) {
            for (let j = 0; j < alfabeto.length; j++) {
                if (this.mensaje.charAt(i) === alfabeto.charAt(j)) {
                    for (let k = 0; k < alfabeto.length; k++) {
                        if (newClave.charAt(i) === alfabeto.charAt(k)) {
                            msjdescifrado += alfabeto.charAt((j + (27 - (k+1)))%27);
                        }
                    }
                }
            }
        }
        return msjdescifrado;
    }
```
## Método refill()
Método `refill()` que se utilizará tanto en `code()` como en `decode()` para rellenar la clave en el caso de que tenga una longitud menor que el mensaje a cifrar/descifrar.

```typescript
    private refill(): string {
        let newClave = '';
        for (let i = 0; i < this.mensaje.length; i++) {
            for (let j = 0; j < this.clave.length; j++) {
                if (newClave.length === this.mensaje.length) {
                    return newClave
                }
                newClave += this.clave.charAt(j);
            }
        }
        return newClave;
    }
```
