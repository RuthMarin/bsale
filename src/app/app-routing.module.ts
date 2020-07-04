import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './productos/productos.component';
import {MarketComponent} from './market/market.component';


const routes: Routes = [
  { path: 'productos', component: ProductosComponent, pathMatch: 'full' ,
  },
  { path: '', component: ProductosComponent, pathMatch: 'full' ,
  },
  { path: 'carro', component: MarketComponent, pathMatch: 'full' ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
