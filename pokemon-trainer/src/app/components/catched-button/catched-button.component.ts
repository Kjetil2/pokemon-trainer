import { Component, Input, OnInit } from '@angular/core';
import { CaughtPokemonService } from 'src/app/services/catched.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-catched-button',
  templateUrl: './catched-button.component.html',
  styleUrls: ['./catched-button.component.css']
})
export class CatchedButtonComponent implements OnInit {

  public loading: boolean = false; 
  public isCaught: boolean = false; 
  @Input() pokemonName: string ="";

  constructor(
    private userService: UserService,
    private readonly caughtPokemonService: CaughtPokemonService
  ) {}

  ngOnInit(): void {
    // inputs are resolved!
    this.isCaught = this.userService.inCatched(this.pokemonName);

  }

  onCatchedClick(): void {
    this.loading = true; 
    //add the pokemon to catched
    alert("Congrats! You catched " + this.pokemonName + "!")
    this.caughtPokemonService.addToCatched(this.pokemonName)
      .subscribe({
        next: (user: User) => {
          this.loading = false; 
          this.isCaught = this.userService.inCatched(this.pokemonName);
        },
        
      
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message);
        }
      })
  }

}
