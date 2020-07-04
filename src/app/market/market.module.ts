import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageHandlerModule } from '../shared/components/message-handler/message-handler.module';
import { MarketRoutingModule } from './market-routing.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MarketComponent } from './market.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		MarketRoutingModule,
		MessageHandlerModule,
		PipesModule,
		BrowserAnimationsModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		MarketComponent
	],
	exports:[
		MatProgressSpinnerModule,
		MatProgressBarModule,
		BrowserAnimationsModule
		
	],
	
	bootstrap: [ Marketomponent ]
})
export class MarketModule { }
