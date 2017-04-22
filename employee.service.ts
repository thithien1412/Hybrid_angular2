import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class EmployeeService{
    private url = "http://58faa86820b2d712005bab80.mockapi.io/api/Login1";
    constructor(private _http:Http){

    }
    getList(): Observable<any[]>{
        return this._http.get(this.url).map((response:Response)=>response.json() )
    }
}