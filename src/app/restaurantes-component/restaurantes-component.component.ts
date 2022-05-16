import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertaService } from '../ofertas.service';


@Component({
  selector: 'app-restaurantes-component',
  templateUrl: './restaurantes-component.component.html',
  styleUrls: ['./restaurantes-component.component.css'],
  providers: [OfertaService]
})
export class RestaurantesComponentComponent implements OnInit {

  
  public ofertas!: Oferta[]

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategoria('restaurante').then((ofertas: Oferta[]) => this.ofertas = ofertas )
  }

}
