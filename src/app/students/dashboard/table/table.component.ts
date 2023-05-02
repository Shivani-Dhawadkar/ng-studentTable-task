import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/model/interface';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableArray : Array<Istudent> =  this._studentservice.getstdArray()
  constructor(private _studentservice:StudentService) { }

  ngOnInit(): void {
    console.log(this._studentservice.getstdArray())
  }

  ondelete(id : string){
    console.log(id)
    this._studentservice.ondelete(id)
    }


    onedit(obj : Istudent){
       console.log(obj)
       let object : Istudent = {
        fname : obj.fname,
        lname : obj.lname,
        email : obj.email,
        contact : obj.contact,
        id : obj.id
  
      }
      
      console.log(object)
       
    }

      
       
    

    
}
