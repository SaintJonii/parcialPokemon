import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  msjError: string = 'No se ha encontrado el path solicitado';

  constructor() { }

  ngOnInit(): void {
  }

}
