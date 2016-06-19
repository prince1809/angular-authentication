import {Injectable} from "angular2/core";
import {Http,Headers} from "angular2/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
const url = "abcd.firebaseio.com";
@Injectable()
export class DataService {
  constructor(
    private _http: Http
  ){}

  getAllData(): Observable<any> {
    return this._http.get(url+'/users/data.json')
    .map(response => response.json());
  }

  addData(data: any): Observable<any> {
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url+'/users/data.json',body, {headers: headers})
    .map(response => response.json());
  }

  deleteAllData(): Observable<any> {
    return this._http.delete(url+'/users/data.json')
    .map(response => response.json());
  }


}
