import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { lastValueFrom } from "rxjs";
import { Oferta } from "./shared/oferta.model";

@Injectable()
export class OfertaService {



           constructor (private httpClient: HttpClient){

           }

           public getOfertas(): Promise<any> {
            return lastValueFrom(this.httpClient.get('http://localhost:3000/ofertas'));
          }

  

          public getOfertasPorCategoria(categoria: string) : Promise<any> {
              return lastValueFrom(this.httpClient.get(`http://localhost:3000/ofertas?categoria=${categoria}`)) //.then((resposta: any) => resposta.json())
          }


    /*public ofertas: Oferta[] = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger BetoRaiz",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]
*/

  
  /*  public getOfertas2(): Promise<Array<Oferta>> {
        return new Promise((resolve, reject) => {
            //algum tipo de processamento, que ao finalizar, chama a função resolve ou a função reject
            // console.log('será que passou por aqui?')
            let deu_certo = true
            if(deu_certo){
                setTimeout(() => resolve(this.ofertas), 3000)
            } else {
                reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado XYZ'})
            }
        })
        .then((ofertas: any) => {
            //fazer alguma tentativa
            console.log('primeiro then')
            return ofertas
        })
        .then((ofertas: Oferta[]) => {
            console.log('segundo then')
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {resolve2(ofertas)},3000) 
            })
        })
        .then((ofertas: any) => {
            console.log('terceiro then executado após 3 segundos porque estava aguardando uma promisse ser resolvida')
            return ofertas
        })
    }*/
}
