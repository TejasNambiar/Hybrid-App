import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProfile } from '../profile';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _url: string = "/assets/sampleData/profile.json"
  private postUrl: string = "http://localhost:4000/api/profileedit"
  getUrl = "http://localhost:4000/api/profile"
  id = "61d42d92c3baea16e0a1134a"
  constructor(private http: HttpClient) {}

  getProfileDetails(): Observable<IProfile[]>{
    return this.http.get<IProfile[]>(this._url);
  }

  addProfileDetails(newProfile: any): Observable<any>{
    var headers = new HttpHeaders()
    console.log("inside postProfileDetails -> newProfile:",newProfile.toString())
    headers.append('Contact-Type','application/json')
    return this.http
               .post<any>(this.postUrl, newProfile,{headers:headers})
}

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  getProfileDetail():Observable<any>{

    let data = this.http.get<any>(this.getUrl+"/"+this.id)
    // this will set ur header to GET 
    console.log("getDetails "+ data)
    return this.http.get<any>(this.getUrl)
  }
}

