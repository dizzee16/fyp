import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import {  } from '../assets'; as; incoming;

let users = JSON.parse(localStorage.getItem('users')) || [];
const songs = JSON.parse(localStorage.getItem('music')) || [];
const incoming = [{
  url:
    // tslint:disable-next-line: max-line-length
    'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
  songName: 'Perfect',
  artist: ' Ed Sheeran'
},
{
  url:
    // tslint:disable-next-line: max-line-length
    'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
  songName: 'Man Atkeya Beparwah',
  artist: 'Nusrat Fateh Ali Khan'
},
{
  url:
    'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
  songName: 'Penny Lane',
  artist: 'The Beatles'
}];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                    case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                case url.endsWith('/assets/songs.json') && method === 'GET':
                    return getSongs();
                case url.endsWith('/songs/set') && method === 'POST':
                      return setSongs(incoming);
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) {return error('Username or password is incorrect'); }
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                venueName: user.venueName,
                token: 'fake-jwt-token'
            });
        }

        function register() {
          const user = body;

          if (users.find(x => x.username === user.username)) {
              return error('Username "' + user.username + '" is already taken');
          }

          user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));

          return ok();
      }

        function getUsers() {
        if (!isLoggedIn()) {return unauthorized(); }
        return ok(users);
      }

        function deleteUser() {
        if (!isLoggedIn()) { return unauthorized(); }

        users = users.filter(x => x.id !== idFromUrl());
        localStorage.setItem('users', JSON.stringify(users));
        return ok();
      }

        function setSongs(incomingSongs) {
          localStorage.setItem('songs', JSON.stringify(incomingSongs));
        }

        function getSongs() {
          return ok(songs);
      }

        // helper functions

        // tslint:disable-next-line: no-shadowed-variable
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
          return throwError({ status: 401, error: { message: 'Unauthorised' } });
      }

        function isLoggedIn() {
          return headers.get('Authorization') === 'Bearer fake-jwt-token';
      }

        function idFromUrl() {
          const urlParts = url.split('/');
          // tslint:disable-next-line: radix
          return parseInt(urlParts[urlParts.length - 1]);
      }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
