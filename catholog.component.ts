import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catholog',
  templateUrl: './catholog.component.html',
  styleUrls: ['./catholog.component.sass']
})
export class CathologComponent  {
public product =[
  {id :1,Name :'samsung tv',price :4500, photo :'assets/rose.jpg'},
  {id :2,Name :'Lee copper ',price:3499,photo:'assets/rose.jpg'}

];
  

}
