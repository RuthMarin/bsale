import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
//servicio que obtiene los datos de los productos en venta

export class ProductService {
	token = '22636ca690d932cc523065f4b3dea68ed3184bdb';
	getProduct (): Promise<any> {
		var collection_id =2;
		var market_id =1;
    	return this.request.get('/'+market_id+'/collection/'+collection_id+'/market_info.json', this.token).then((res) => {
			return res;
		}, (err) => {
			console.log(err);
		});
    }

    //servicio post de dejar el producto en un carro de compras

    postProduct (body:any): Promise<any> {
		var collection_id =2;
		var market_id =1;
    	return this.request.post('/cart.json', body, this.token).then((res) => {
			return res;
		}, (err) => {
			console.log(err);
		});
    }
	constructor(
		private request: RequestService ) { }
}
