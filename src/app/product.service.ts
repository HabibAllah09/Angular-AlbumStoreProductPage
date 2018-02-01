import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// to map the http output as json
// and to use the map function
// we have to import it from rxjs
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  // private _albumUrl: string = '../assets/album.json';
  // there's no need to declair the type of the class property
  private _albumUrl = '../assets/album.json';

  // the get returns a response
  // the response is not a json
  // the map function maps the response into json
  // the .json function turn the response into json
  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(
      (response) => response.json()
    );
  }

}
