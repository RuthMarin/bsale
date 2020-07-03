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
        this.productos.push(data.data[i].name);
      }
      console.log(data.data[0]); 
      console.log(this.productos[0].id);
      this.loading = false; 
    }, (err) => {
      console.error(err)
      this.router.navigate(['/firma-web/errores']);
      console.log('Ocurrió un error');
    });
    
  }

  ngOnInit() {
  this.getProduct(); }

  test() {
    console.log('tested');
  }
}
