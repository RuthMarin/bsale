import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageHandlerModule } from '../shared/components/message-handler/message-handler.module';
import { ProductosRoutingModule } from './productos-routing.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ProductosComponent } from './productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	imports: [
		CommonModule,
		ProductosRoutingModule,
		MessageHandlerModule,
		PipesModule,
		BrowserAnimationsModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		BrowserModule,
	],
	declarations: [
		ProductosComponent
	],
	exports:[
		MatProgressSpinnerModule,
		MatProgressBarModule,
		BrowserAnimationsModule
		
	],
	
	bootstrap: [ ProductosComponent ]
})
export class ProductosModule { }
