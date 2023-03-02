import { Injectable } from '@angular/core';
import { PokemonCatalogueService } from "./pokemon-catalogue.service";
import { environment } from 'src/environments/environment';
import { UserService } from "./user.service";
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


const { apiKey, apiUsers} = environment;

@Injectable({
  providedIn: 'root'
})
export class CaughtPokemonService {


  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService, 
    private readonly userService: UserService,

  ) { }
  //get the pokemon based on ??

  // patch request with the userId and the pokemon

  public addToCatched(pokemonName: string): Observable<User> { 
    if (!this.userService.user) {
      throw new Error("addToCatched: There is no Trainer")
    }

    const user: User = this.userService.user;
    //const pokemon = this.pokemonCatalogueService.getPokemon(name)

    const pokemon: Pokemon | undefined = this.pokemonService.pokemonByName(pokemonName)

    if (!pokemon) {
      //throw new Error("addToCatched: No pokemon with id: " + pokemonId)
      throw new Error("addToCatched: No pokemon with name: " + pokemonName)
    }

    // If Pokemon already catched
    if (this.userService.inCatched(pokemonName)) {
      this.userService.removeFromCatched(pokemonName);
    } else {
      this.userService.addToCatched(pokemonName);
    }

    const headers = new HttpHeaders({
      "content-type": "application/json", 
      "x-api-key": apiKey
    })


    return this.http.patch<User>(`${apiUsers}/${user.id}`, {
      pokemon: [...user.pokemon] //Already updated
    }, {
      headers
    })
    .pipe(
      tap((updatedUser: User) => {
        this.userService.user = updatedUser;
      })
    )
  }
}
