import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pokemon: any;
  listImages: any[] = [];
  listAbilitys: any[] = [];
  loading: boolean;

  constructor(private pokemonService: PokemonService, private router: ActivatedRoute) {

    this.loading = true;

    this.router.queryParams.subscribe(params => {
      this.getPokemonsDetails(params['pokemon']);

    });

  }

  ngOnInit(): void {
  }

  getPokemonsDetails(pokemon: string) {
    debugger;
    this.pokemonService.getPokemonByName(pokemon)
      .subscribe(data => {
        this.pokemon = data;
        this.getImages();
        this.getAbilities();
      });
  }

  getImages() {
    debugger;
    this.listImages.push(this.pokemon.sprites.back_default);
    this.listImages.push(this.pokemon.sprites.back_shiny);
    this.listImages.push(this.pokemon.sprites.front_default);
    this.listImages.push(this.pokemon.sprites.front_shiny);
  }

  getAbilities() {
    for (let ability of this.pokemon.abilities) {
      let abilityName = ability.ability.name;
      this.pokemonService.getPokemonAbility(abilityName)
        .subscribe(data => {
          this.listAbilitys.push(data);
        });
    }
    console.log(this.listAbilitys);
    this.loading = false;

  }


}
