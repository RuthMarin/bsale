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
  	var jsons = new Array();
  	if(localStorage.getItem('carro') == null){
		jsons.push({"name": name, "price": price, "imagen": imagen, "id": id});
  		localStorage.setItem('carro', JSON.stringify(jsons));
  		this.router.navigate(['/carro']);
  	}else{
		var lista = JSON.parse(localStorage.getItem("carro"));
	  	lista.push({"name": name, "price": price, "imagen": imagen, "id": id});
  		localStorage.setItem('carro', JSON.stringify(lista));
  		console.log("pase");
  		this.router.navigate(['/carro']);

  	}

  	
  	

  }

  ngOnInit() {
  this.getProduct(); }

  test() {
    console.log('tested');
  }
}
