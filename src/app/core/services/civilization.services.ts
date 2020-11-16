import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { CivilizationModel } from '../models/civilizations.model';

@Injectable({
  providedIn: 'root'
})
export class CivilizationService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  getAllCivilizations() {
    console.log("Url...", `${this.apiUrl}/civilizations`)
    return this.http.get<CivilizationModel[]>(`${this.apiUrl}/civilizations`);
  }

}
