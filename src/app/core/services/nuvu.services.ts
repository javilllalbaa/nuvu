import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ProfileModel } from '../models/nuvu.model';
import { Data } from './../mockup/data'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuvuService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  public getProfileJSON(): Observable<any> {
    return of(Data)
  }

}
