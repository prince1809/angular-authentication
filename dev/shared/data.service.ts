import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {
  constructor(
    private _http: Http
  ){}

  getAllData(): Observable<any> {
    return null;
  }
}
