export abstract class Fighter{
    constructor(protected universo: string, protected readonly nombre: string, 
                protected readonly peso_altura: number[], public stats: number[] ) {
    }
    getName(): string {
        return this.nombre;
    }
    getPesoAltura(): number[] {
        return this.peso_altura;
    }
    getUniverso(): string{
        return this.universo;
    }
    getStats(): number[]{
        return this.stats;
    }
}

export class Pokemon extends Fighter{
    constructor(universo: string, nombre: string, peso_altura: number[], stats: number[], private tipo: string ) {
        super(universo, nombre, peso_altura, stats )
    } 
    getTipo(){
        return this.tipo;
    }
}

export class Pokedex extends Fighter{
    constructor(universo: string, nombre: string, peso_altura: number[], stats: number[] ) {
        super(universo, nombre, peso_altura, stats )
    } 
    print(): string{
        return 'Universo: '+ String(this.universo)+'\n'+
                'Nombre: ' + this.nombre + '\n'+
                'Peso: ' + String(this.peso_altura[0])+ '\n'+
                'Altura: '+ String(this.peso_altura[1])+ '\n'+
                'HP: '+ String(this.stats[0])+ '\n'+
                'Ataque: '+ String(this.stats[1])+ '\n'+
                'Defensa: '+ String(this.stats[2])+ '\n';

    }
}

let figther = new Pokemon('POKEMON', 'Bulbasaur', [6.9, 0.7], [45,49,49], 'GRASS')