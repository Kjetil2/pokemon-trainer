import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
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

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void{

  }

}
