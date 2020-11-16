import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { CivilizationModel } from '../models/civilizations.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class sendFormService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  send(status) : Observable<any>{
    if(status){
        return of({ status: 200 })
    }
  }

}
