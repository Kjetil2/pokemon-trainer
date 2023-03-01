import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { PokemonAPI } from '../models/pokemonAPI.model';
const {apiPokemons } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private _pokemons: Pokemon[]= [];
  private _error: string = "";
  private _loading: boolean = false;
  private _apiDone = false;

  get pokemons(): Pokemon[] {
    return this._pokemons
  }

  get error(): string{
    return this._error;
  }

  get loading(): boolean{
    return this._loading;
  }

  constructor(private readonly http: HttpClient) { 
    this._pokemons = [];
  }


  public findAllPokemons(): void{
    if(!this._apiDone){
      this._loading = true;
      this.http.get<PokemonAPI>(apiPokemons)
      .pipe(
        map((response: PokemonAPI) => response.results)
      )
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe(
        (results: Pokemon[]) => {
          for(let result of results) {
            this.pokemons.push(result)
          }
        }
      ),{
        error: (error: HttpErrorResponse) => {
        }
      }
    }
    this._apiDone = true;
  }




  // public findAllPokemons(): void {
  //   this._loading = true;
  //   this.http.get<Pokemon[]>(apiPokemons)
  //   .pipe(
  //     finalize(() => {
  //       this._loading = false;
  //     })
  //   )
  //   .subscribe({
  //     next: (pokemons: Pokemon[]) => {
  //       if (pokemons && pokemons.length > 0) {
  //         this.pokemons.push(pokemons[0]);
  //       }
  //       // console.log(pokemons)
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this._error = error.message;
  //     }
  //   })
  // }
}
