import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { PokemonCatalogueService } from './services/pokemon-catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pokemon-trainer';
  constructor(
    private readonly userService: UserService, 
    private readonly pokemonService: PokemonCatalogueService
  ) {}
  ngOnInit(): void {
    if (this.userService.user) {
      this.pokemonService.findAllPokemons();
    }
  }
}
