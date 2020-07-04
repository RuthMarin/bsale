import { Component, OnInit, AfterViewInit, AfterContentInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../services/product.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
	productos=[];
	loading = true;

  @Output() homeRendered: EventEmitter<any> = new EventEmitter();

  datosForm: FormGroup;
  selectedValue;

  constructor(private router: Router,
  			  public productService: ProductService,
          private formBuilder: FormBuilder) {

      this.datosForm = this.formBuilder.group({
      cantidad: [''],
      id: [''],
      precio: [''],
    }); 

    console.log(this.datosForm.get("cantidad").value);}

  getProduct(){
      this.productos = JSON.parse(localStorage.getItem("carro"));
      this.loading = false; 

  }
  get form() { return this.datosForm.controls; }


  atras(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
  this.getProduct(); 
  
}

  test() {
    console.log('tested');
  }
}
