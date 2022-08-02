import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clip } from '../models/clip';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ClipsDbjsonService {
  private hotClipsUrl = 'http://localhost:3000/hotclips';
  private playlistUrl = 'http://localhost:3000/myplaylist';

  constructor(private http: HttpClient) {}

  public getHotClips(): Observable<Clip[]> {
    return this.http.get<Clip[]>(this.hotClipsUrl);
  }

  public getPlaylist(): Observable<Clip[]> {
    return this.http.get<Clip[]>(this.playlistUrl);
  }

  public addClip(clip: Clip): Observable<Clip> {
    const url = `${this.playlistUrl}`;
    return this.http.post<Clip>(this.playlistUrl, clip, httpOptions);
  }

  public removeClip(clipId: number): Observable<Clip> {
    const url = `${this.playlistUrl}/${clipId}`;
    return this.http.delete<Clip>(url, httpOptions);
  }
}
