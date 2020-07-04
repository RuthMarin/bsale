import { Component, OnInit, AfterViewInit, AfterContentInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
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
      //this.router.navigate(['/firma-web/errores']);
      console.log('Ocurrió un error');
    });
    
  }

  ngOnInit() {
  this.getProduct(); }

  test() {
    console.log('tested');
  }
}
