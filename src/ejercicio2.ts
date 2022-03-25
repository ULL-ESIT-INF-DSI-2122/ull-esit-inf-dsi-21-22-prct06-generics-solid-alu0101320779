export interface Streamable<T> {
    getItem(index: number): T;
    getNumberOfItems(): number;
    searchAño(termino: T): T[];
    searchNombre(termino: T): T[];
    searchNovedades(termino: T): T[];
  }

  export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(protected items: T[]){
    }

    getItem(index: number): T{
        return this.items[index];
    }

    getNumberOfItems(): number {
        return this.items.length;
    }

    abstract searchAño(termino: T): T[];
    abstract searchNombre(termino: T): T[];
    abstract searchNovedades(termino: T): T[];
}