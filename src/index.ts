export interface Collectable<T> {
    addItem(newItem: T): void;
    getItem(index: number): T;
    removeItem(index: number): void;
    getNumberOfItems(): number;
  }

export interface Searchable<T> {
    search(termino: T): T[];
}
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
    constructor(protected items: T[]){
    }

    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    getItem(index: number): T{
        return this.items[index];
    }

    removeItem(index: number): void {
        this.items.splice(index) 
    }

    getNumberOfItems(): number {
        return this.items.length;
    }

    abstract search(termino: T): T[];
}

export class NumericSearchableCollection<T> extends SearchableCollection<T>{
    constructor(items: T[]) {
        super(items);
      }
    /**
     * 
     * @param termino Este será el término a buscar
     * @returns Devolverá un array con los terminos encontrados
     */
    search(termino: T): T[] {
        let newArray = []
        for(let i = 0; i < this.getNumberOfItems(); i++){
            if (this.items[i] === termino){
                newArray.push(this.items[i]);
            }
        }
        return newArray;
    }
}

export class StringSearchableCollection<T> extends SearchableCollection<T>{
    constructor(items: T[]) {
        super(items);
      }
    /**
     * 
     * @param termino Buscará el término `string`
     * @returns Devolverá un arrray con las coincidencias.
     */
    search(termino: T): T[] {
        let newArray = [];
        for(let i = 0; i < this.getNumberOfItems(); i++){
            if (this.items[i]=== termino){
                newArray.push(this.items[i]);
            }
        }
        return newArray;
    }
}

const myCollection =new NumericSearchableCollection([7, 6, 10, 10, 5]);
const myCollection1 = new StringSearchableCollection(['hola', 'adios', 'solid']);

console.log(myCollection.search(10));

console.log(myCollection1.search('hola'));