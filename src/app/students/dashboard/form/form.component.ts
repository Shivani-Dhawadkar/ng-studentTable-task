import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/model/interface';
import { StudentService } from 'src/app/shared/services/student.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private _utilityservice : UtilityService, private _studentservice : StudentService) { }

  ngOnInit(): void {
  }
  onsubmit(fname : HTMLInputElement, lname : HTMLInputElement, email : HTMLInputElement, contact : any ){
    console.log(fname.value)
    let object : Istudent= {
      fname: fname.value,
      lname : lname.value,
      email : email.value,
      contact : contact.value,
      id : this._utilityservice.generateUuid()
    };
    this._studentservice.addobj(object);
    console.log(this._studentservice.getstdArray())
    fname.value = ''
    lname.value = ''
    email.value = ''
    contact.value = ''
  }

  onedit(obj : Istudent){
    console.log(obj)
    
  }
}
