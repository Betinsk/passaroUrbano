import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { RestaurantesComponentComponent } from './restaurantes-component/restaurantes-component.component'
import { DiversaoComponentComponent } from './diversao-component/diversao-component.component'


export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'restaurantes', component: RestaurantesComponentComponent},
    { path: 'diversao', component: DiversaoComponentComponent}


]


