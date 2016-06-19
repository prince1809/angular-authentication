import {Component, Injector, OnInit} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {DataService} from "../shared/data.service";

@Component({
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onSaveData()">
            <div class="input-group">
                <label for="title">Title</label>
                <input [ngFormControl]="myForm.find('title')" type="text" id="title" #title="ngForm">
            </div>
            <div class="input-group">
                <label for="content">Content</label>
                <input [ngFormControl]="myForm.find('content')" type="text" id="content">
            </div>
            <button type="submit" [disabled]="!myForm.valid">Add Data</button>
        </form>
    `,
    providers: [DataService]
})
export class ProtectedComponent implements OnInit {
    myForm: ControlGroup;

    constructor(
      private _fb: FormBuilder,
      private _dataService: DataService
    ) {}

    onSaveData() {
      this._dataService.addData(this.myForm.value)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
    }

    ngOnInit():any {
        this.myForm = this._fb.group({
           title: ['', Validators.required],
           content: ['', Validators.required],
        });
    }
}
