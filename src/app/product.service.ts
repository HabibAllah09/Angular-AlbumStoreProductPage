import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// #1: to map the http output as json
// and to use the map function
// we have to import it from rxjs
import 'rxjs/add/operator/map';

// #3: just like OOP, in typescript you can create new types
// new type called interface
// imporing the interface is essential to use it.
import { Album } from './album';

// #4: in RxJS, you represent asynchronous data streams using ...
// ... Observable sequences called observalbes.
// Observables are very flexable and can be used ...
// ... using push or pull patterns
// push patterns: we subscribe to the source stream ...
// ... and react to new data as soon as is made available
// pull patterns: we are using the same operations as push ...
// ... but synchronously. this happens when using Arrays, ...
// ... Generators or Iterables
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  // private _albumUrl: string = '../assets/album.json';
  // there's no need to declair the type of the class property
  private _albumUrl = '../assets/album.json';

  // #2: the get returns a response
  // the response is not a json
  // the map function maps the response into json
  // the .json function turn the response into json
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(
      (response) => <Album>response.json()
    );
  }

}
