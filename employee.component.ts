import { Component,OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service'
@Component({
  selector: 'employee-list',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit{
    public users: any[];
    public id="";
    public pass="";
    public output;
    constructor(private employeeService: EmployeeService){

    }
    ngOnInit(){
        this.employeeService.getList().subscribe((response:any)=>{
            this.users = response;
        })
    }
    onclick(){
        var kt:boolean ;
        kt=false;
       for (var i =0;i<this.users.length;i++)
        {
            if (this.id==this.users[i].id && this.pass == this.users[i].pass) kt=true;
        }
        if (kt==true) this.output="Success!"
        else this.output="Fail";        
    
    }
}
