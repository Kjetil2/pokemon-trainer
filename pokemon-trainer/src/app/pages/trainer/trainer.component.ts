import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  

  get user(): User | undefined {
    return this.userService.user; 
  }

  get pokemons(): string[] {
    if (this.userService.user) {
      return this.userService.user.pokemon
    }

    return [];
  }

  get catched(): Pokemon[]{
    if (this.userService.user) {
      let catchedPokemonUndefined = [];
      let catchedPokemonDefined = [];
      for (let i = 0; i < this.userService.user.pokemon.length; i++) {
        catchedPokemonUndefined.push(this.pokemonCatalogueService.pokemonByName(this.userService.user.pokemon[i]));
        catchedPokemonDefined.push({name: catchedPokemonUndefined[i]?.name!, url: catchedPokemonUndefined[i]?.url!, pokemonimg: catchedPokemonUndefined[i]?.pokemonimg!})
      }
      return catchedPokemonDefined;
    }
    return [];
  }

  constructor(
    private userService: UserService,
    private pokemonCatalogueService: PokemonCatalogueService){}

  ngOnInit(): void{

  }

}
