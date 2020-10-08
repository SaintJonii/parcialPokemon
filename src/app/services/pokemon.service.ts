import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getAllPokemones(): Observable<any> {
    debugger;
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemonByName(pokemon: string) {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
  }

  getPokemonAbility(ability: string) {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/ability/${ability}/`);
  }



}
