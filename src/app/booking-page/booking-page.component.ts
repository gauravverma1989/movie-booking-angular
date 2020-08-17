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

  constructor(private router: Router) { }

  timingAList: any =['10:00', '11:00', '13:00', '17:00', '20:00' ]
  timingBList: any =['10:00', '11:00', '13:00' ]
  timingCList: any =['10:00', '11:00', '13:00', '15:00' ]
  timingDList: any =['07:00', '12:00', '14:00', '18:00']
  timingEList: any =[ '12:00', '14:00' ]

    form = new FormGroup({
    movie: new FormControl('', Validators.required),
    timingcontrol: new FormControl('', Validators.required),
    numbercontrol: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }


  

  ngOnInit(): void {

    /*----------------------------------------------*/

    $('#select_box').change(function () {
      var select=$(this).find(':selected').val();        
       $(".hide").hide();
       $('#' + select).show();
      
            }).change();

  /*-----------------------------------------------*/

  }


}
