import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao-component',
  templateUrl: './diversao-component.component.html',
  styleUrls: ['./diversao-component.component.css'],
  providers: [OfertaService]

})
export class DiversaoComponentComponent implements OnInit {

  
  public ofertas!: Oferta[]

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategoria('diversao').then((ofertas: Oferta[]) => this.ofertas = ofertas )
  }
}
