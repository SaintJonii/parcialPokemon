import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  listaPokemones: [] = [];
  loading: boolean;
  titulo: string = 'Listado de Pokemones';



  constructor(private pokemonService: PokemonService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemones()
      .subscribe(data => {
        debugger;
        this.listaPokemones = data.results;
        this.loading = false;
        console.log(this.listaPokemones);
      });
  }

}
