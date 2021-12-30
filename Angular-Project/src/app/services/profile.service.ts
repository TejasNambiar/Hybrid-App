import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from '../profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _url: string = "/assets/sampleData/profile.json"
  constructor(private http: HttpClient) {}

  getProfileDetails(): Observable<IProfile[]>{
    return this.http.get<IProfile[]>(this._url);
  }
}

