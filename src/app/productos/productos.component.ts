import { Component, OnInit, AfterViewInit, AfterContentInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
	productos=[];
	loading = true;
	select: string = '1';
	lista = [
      {id: '1', value: 1},
      {id: '2', value: 2},
      {id: '3', value: 3},
      {id: '4', value: 4},
      {id: '5', value: 5}];

  @Output() homeRendered: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,
  			  public productService: ProductService) { }

    getProduct(){
    this.productService.getProduct().then(data=> {
    	for (let i = 0; i < data.data.length; ++i) {
        this.productos.push({'name': data.data[i].name, 'imagen': data.data[i].urlImg, 'price': Math.round(data.data[i].variant.finalPrice),'id': data.data[i].variant.id});
      }
      console.log(data.data[1]);
      console.log(data.data[2]);
      this.loading = false; 
    }, (err) => {
      console.error(err)
      console.log('Ocurrió un error');
    });
    
  }

  comprar(name:any,price:any, imagen:any, id:any){
  	this.loading = true; 
  	var jsons = new Array();
  	var body ={ "cartDetails": [
		{"quantity": Number(this.select),"unitValue":price,"idVarianteProducto": id}]};
  	if(localStorage.getItem('carro') == null){
  		this.productService.postProduct(body).then(data=> {
	      jsons.push({"name": name, "price": price, "imagen": imagen, "id": id, "total":data.data.cartDetails[0].total, "cantidad": Number(this.select)});
  		  localStorage.setItem('carro', JSON.stringify(jsons));
	      this.router.navigate(['/carro']);
	      this.loading = false; 
	    }, (err) => {
	      console.error(err)
	      console.log('Ocurrió un error');
	    });
  	}else{
		var lista = JSON.parse(localStorage.getItem("carro"));
		this.productService.postProduct(body).then(data=> {
	      lista.push({"name": name, "price": price, "imagen": imagen, "id": id, "total":data.data.cartDetails[0].total, "cantidad": Number(this.select)});
  		  localStorage.setItem('carro', JSON.stringify(lista));
	      this.router.navigate(['/carro']);
	      this.loading = false; 
	    }, (err) => {
	      console.error(err)
	      console.log('Ocurrió un error');
	    });

  	}
  }
    selectChangeHandler (event: any) {
    this.select = event.target.value;
    console.log(this.select)
  }


  ngOnInit() {
  this.getProduct(); }

  test() {
    console.log('tested');
  }
}
