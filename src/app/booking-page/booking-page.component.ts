import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})

export class BookingPageComponent implements OnInit {
  // movie="";
  // showhidediv: boolean;

  constructor(private router: Router) { }

  websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  statusList: any =['Open', 'Delivered']

  form = new FormGroup({
    website: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }


  

  ngOnInit(): void {

    /*----------------------------------------------*/
  $(document).ready(function() {
  
    $("#source").change(function() {
      
      var el = $(this) ;
      
      if(el.val() === "ItSolutionStuff.com" ) {
      $("#status").append("   <option>SHIPPED</option>");
      }
        else if(el.val() === "HDTuto.com" ) {
          $("#status option:last-child").remove() ; }
    });
    
  });
  /*-----------------------------------------------*/

  }

}
