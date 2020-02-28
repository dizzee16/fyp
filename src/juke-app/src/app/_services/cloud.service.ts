import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Url } from 'url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  queue = new Subject() as any;
  incomingSongs: Array<Url>;
  private http: HttpClient;

getFiles() {
    return of(this.queue);
  }

addToQueue(url) {
    this.queue.next(url);
  }

constructor() {
    this.incomingSongs = this.queue
    .mergeMap(url => this.http.get(url), null, 1);
  }
}
