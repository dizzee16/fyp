import { Injectable } from '@angular/core';
import { of, Subject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Song } from '../_interfaces/song';
import { map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

interface ResponseSongs {
  results: Song[];
}

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  queue: Subject<any>;
  private url = `${environment.apiUrl}/assets/songs.json`;

getFiles() {
    return this.queue.asObservable();
  }

addToQueue(song) {
    this.queue.next(song);
  }

clearQueue() {
  this.queue.next();
}


constructor(private http: HttpClient) {
  this.queue = new Subject<Song[]>();
  }

  postSongs(incoming) {
    return this.http.post<any>(`${environment.apiUrl}/songs/set`, {incoming})
    .pipe(map(songs => {
      localStorage.setItem('songs', JSON.stringify(songs));
    }));
  }

  getSongs(): Observable<any> {
    return this.http.get<ResponseSongs>(this.url)
    .pipe(map(response =>  (console.log(response))));
  }
}
