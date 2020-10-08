import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listaPokemones;
  @Input() titulo;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verDetalle(pokemon) {
    this.router.navigate(['pokemones/detalle/'], { queryParams: { pokemon: pokemon.name } })
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });


  }

}
