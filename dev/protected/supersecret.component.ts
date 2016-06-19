import {Component} from "angular2/core";
import {DataService} from "../shared/data.service";

@Component({
    template: `
        <h1>Data</h1>
        <p>{{ dataset }}</p>
        <button (click)="onGetData()">Get Data</button>
        <br>
        <button (click)="onDeleteData()">Delete all Data</button>
    `,
    providers: [DataService]
})
// @CanActivate()
export class SuperSecretComponent {
    dataset: any;

    constructor (
      private _dataService: DataService
    ) {}

    onGetData() {
      this._dataService.getAllData()
      .subscribe(
        data => this.dataset = JSON.stringify(data),
        error => console.log(error)
      )
    }

    onDeleteData() {
      this._dataService.deleteAllData()
      .subscribe(
        data => this.dataset = "",
        error => console.log(error)
      )
    }
}
