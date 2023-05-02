import { Injectable } from '@angular/core';
import { studentarray } from '../const/array';
import { Istudent } from '../model/interface';
import { UtilityService } from './utility.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


stdArray : Array<Istudent> = studentarray
  constructor(private _utilityservice: UtilityService, private _snackbarservice : SnackbarService) { }

getstdArray(){
  return this.stdArray
}
addobj(obj : Istudent){
this.stdArray.push(obj)
this._snackbarservice.openSnackBar('Student has been added to list Successfully', 'close')
}

ondelete(id : string){
  let index = this.stdArray.findIndex((ele)=>ele.id === id)
  this.stdArray.splice(index,1)
  
}

onsubmit(fname : HTMLInputElement, lname : HTMLInputElement, email : HTMLInputElement, contact : any ){
  console.log(fname.value)
  let object : Istudent= {
    fname: fname.value,
    lname : lname.value,
    email : email.value,
    contact : contact.value,
    id : this._utilityservice.generateUuid()
  }
  
}


onedit(obj : Istudent){
  let index = this.stdArray.findIndex((ele)=> ele.id === obj.id)
  this.stdArray.map((ele)=>
ele
  )
}
}
