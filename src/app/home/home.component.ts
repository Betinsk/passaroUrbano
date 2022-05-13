import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService ]
})
export class HomeComponent implements OnInit {

  public ofertas: any[] = []

  constructor(private ofertasService: OfertaService) { }

  ngOnInit(): void {
  // this.ofertas = (this.ofertasService.getOfertas())
   //console.log(this.ofertas)

   this.ofertasService.getOfertas()
   .then((ofertas: Oferta[]) => {
     console.log('A funcao...')
     this.ofertas = ofertas })
    .catch((param: any) => {console.log(param)})

    } 

}
