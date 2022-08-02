import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipsApiService {

  constructor(private http:HttpClient) { }

  public findClip(search: string):Observable<any>{

    const apiKey= "AIzaSyD114qjq_79NVw9HE8y5KjvO8sCiywZJpM"
    const url= `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${search}`
    
    return this.http.get<any>(url)
  }
}
