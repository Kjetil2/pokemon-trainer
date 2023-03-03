import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user?: User;

  get user(): User | undefined{
    return this._user;
  }

  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
    
   }
   
   public inCatched(pokemonName: string): boolean { 
    if(this._user) {
      return Boolean(this._user.pokemon.some(pokemon => pokemon === pokemonName))

    }
    return false;

   }

   public addToCatched(pokemonName: string): void {
    if (this._user) {
      this._user.pokemon.push(pokemonName);
    }
   }

   public removeFromCatched(pokemonName: string): void {
    if (this._user) {
      this._user.pokemon = this._user.pokemon.filter(item => item !== pokemonName);
    }
   }
}