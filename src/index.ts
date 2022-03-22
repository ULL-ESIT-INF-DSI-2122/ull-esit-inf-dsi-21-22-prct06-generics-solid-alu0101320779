export abstract class Fighter {
    constructor(private readonly name: string,private peso_altura: number[],private stats: number[] ) {
    }
  
    getName() {
      return this.name;
    }
    getPesoA() {
      return this.peso_altura;
    }
    getStats() {
        return this.stats;
      }

    /*setColor(color: ColorType) {
      this.color = color;
    }*/

    abstract print(): string;
  }


export class Marvel extends Fighter {
    private readonly sides = 4;
  
    constructor(name: string,peso_altura: number[],stats: number[], 
        private universo: string = 'Marvel') {
      super(name, peso_altura, stats);
    }
  
    getUniverso() {
      return this.universo;
    }
  
    print():string {
      return `Nombre ${this.getName()}`+'\n'+
             `Peso y altura: ${this.getPesoA()}`+'\n'+
             `Stats: ${this.getStats()}`;
    }
  }

export class Pokedex {

    /**
     * @param name El name del pokemon.
     * @param peso_altura La altura y el peso del pokemon.
     * @param tipo El tipo del pokemon.
     * @param stats Los stats del pokemon (HP, ataque, defensa, ataque especial, defensa especial, velocidad).
     */
    public name: string;
    private peso_altura: number[];
    public tipo: string;
    public stats: number[] 

    constructor(name: string, peso_altura: number[], tipo: string, stats: number[] ){
        
        this.name = name;
        this.peso_altura = peso_altura;
        this.tipo = tipo;
        this.stats = stats;
    }
    /**
     * Esta función devuelve la información por pantalla de cada pokemon.
     * 
     * @returns Un `string` con la información del pokemon introducido.
     */
    public data(): string{
        return 'name: ' + String(this.name) 
            +'\nPeso y altura: '+String(this.peso_altura)
            +'\nTipo: '+String(this.tipo)
            +'\nStats: '+String(this.stats)
            +'\n';
    }

}

export class Combat{
    /**
     * @param pokemons Es un array de dos pokemons tipo `Pokedex`.
     */
    pokemons: Pokedex[];
    constructor(pokemons: Pokedex[]){
        this.pokemons = pokemons;
    }
    /**
     * 
     * @param tipo Es el tipo de el pokemon que va a atacar.
     * @param tipo_en Es el tipo del pokemon que va a recibir el ataque.
     * @returns Devuelve la efectividad del primer pokemon sobre el segundo pokemon.
     */
    private efect(tipo: string, tipo_en: string): number {
        let efectividad = 0;
        switch (tipo) {
            case 'FIRE':
                if (tipo_en == 'WATER') {
                    return efectividad = 0.5;
                } if (tipo_en == 'GRASS') {
                    return efectividad = 2;
                } if (tipo_en == 'ELECTRIC') {
                    return efectividad = 1;
                }
                break;
            case 'WATER':
                if (tipo_en == 'FIRE') {
                    return efectividad = 2;
                } if (tipo_en == 'GRASS') {
                    return efectividad = 0.5;
                } if (tipo_en == 'ELECTRIC') {
                    return efectividad = 0.5;
                }
                break;
            case 'GRASS':
                if (tipo_en == 'WATER') {
                    return efectividad = 2;
                } if (tipo_en == 'FIRE') {
                    return efectividad = 0.5;
                } if (tipo_en == 'ELECTRIC') {
                    return efectividad = 1;
                }
                break;
            case 'ELECTRIC':
                if (tipo_en == 'WATER') {
                    return efectividad = 2;
                } if (tipo_en == 'GRASS') {
                    return efectividad = 1;
                } if (tipo_en == 'FIRE') {
                   return efectividad = 1;
                }
                break;
            }
            return efectividad;
        }
    /**
     * Esta función irá calculando el daño que le hará un pokemon al otro y lo irá guardando como `string` para después devolverlo.
     * 
     * @returns Devuelve un `string` con lo que sucedio en el combate entre los pokemons.
     */      
    public start(): string {
        let salida= ''; 
        while(pokemons[0].stats[0] > 0 || pokemons[1].stats[0] > 0){
            let k = 1;
            for(let j = 0; j < 2; j++){  
                let damage = 0;
                let efec = this.efect(pokemons[j].tipo, pokemons[k].tipo);
                damage = 50 * (this.pokemons[j].stats[1] / this.pokemons[k].stats[2]) * efec;
                pokemons[k].stats[0] = pokemons[k].stats[0] - damage;
                if (pokemons[j].stats[0] > 0){
                    if (pokemons[k].stats[0] < 0){
                        pokemons[k].stats[0] = 0;
                    }
                    salida += (`\n${this.pokemons[j].name} ha infligido ${(damage.toFixed(0))} puntos de daño sobre ${this.pokemons[k].name}\n
                    ${this.pokemons[0].name} HP: ${pokemons[0].stats[0].toFixed(0)}
                    ${this.pokemons[1].name} HP: ${pokemons[1].stats[0].toFixed(0)}`);
                    k--;
                }
            } 
        }
        return salida;  
    }
}


let firstPokemon = new Pokedex('Bulbasaur', [6.9, 0.7], 'GRASS',[45,49,49,65,65,45]);
let secondPokemon = new Pokedex('Charmander', [8.5, 0.6], 'FIRE',[39,52,43,60,50,65]);
let thirdPokemon = new Pokedex('Squirtle', [9.0, 0.5], 'WATER',[44,48,65,50,64,43]);
let fourthPokemon = new Pokedex('Pikachu', [6.0, 0.4], 'ELECTRIC',[35,55,40,50,50,90]);

let firstHero = new Marvel('Iron Man', [102, 1.85], [200,400,500,65,65,45]);

let pokemons = [firstPokemon, secondPokemon, thirdPokemon, fourthPokemon];
let firstFight = new Combat([firstPokemon, firstHero]);

console.log(`${firstFight.start()}`)
