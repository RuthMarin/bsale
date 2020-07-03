import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductosComponent } from './productos.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)]
})
export class ProductosRoutingModule { }
