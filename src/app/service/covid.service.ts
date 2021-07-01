import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCountry():Observable<any>{
    const url="https://coronavirus-19-api.herokuapp.com/countries";
    return this.http.get(url);
  }

  getData(country:any){
    const url="https://coronavirus-19-api.herokuapp.com/countries/"+country;
    return this.http.get(url);
  }


}
