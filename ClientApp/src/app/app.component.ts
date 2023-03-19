import {Component, OnInit} from '@angular/core';
import {Point, Service} from './app.service';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface Function {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./base-style.css'],
  providers: [Service],
})
export class AppComponent implements OnInit {
  title = 'Test';


  functions: Function[] = [
    {value: 'Normal', viewValue: 'Normal'},
    {value: 'Beta4', viewValue: 'Beta4'},
  ];

  selected = this.functions[0].value;

  densityInfo: Point[];
  cumulationInfo: Point[];

  public formGroupBeta4 = this._fb.group({
    alpha: this._fb.control(3),
    beta: this._fb.control(4),
    min: this._fb.control(-3),
    max: this._fb.control(5)
  });

  public formGroupNormal = this._fb.group({
    mu: this._fb.control(0),
    sigma: this._fb.control(1),
  });

  constructor(public readonly service: Service, private readonly _fb: FormBuilder) {
  }

  ngOnInit() {

    this.service.getPointsNormal(
      this.formGroupNormal.controls.mu.value,
      this.formGroupNormal.controls.sigma.value);

    this.formGroupBeta4.valueChanges.subscribe(value => {
        if (value.min!==null && value.max!==null && value.alpha!==null && value.beta!==null) {
          this.service.getPointsBeta4(
            this.formGroupBeta4.controls.alpha.value,
            this.formGroupBeta4.controls.beta.value,
            this.formGroupBeta4.controls.min.value,
            this.formGroupBeta4.controls.max.value);
        }
      }
    )


    this.formGroupNormal.valueChanges.subscribe(value => {
      if (value.mu!==null && value.sigma!==null) {
        this.service.getPointsNormal(
          this.formGroupNormal.controls.mu.value,
          this.formGroupNormal.controls.sigma.value);
      }
    })
    this.service.pointsDensity$.subscribe(value =>
      this.densityInfo = [...value]);
    this.service.pointsCumulation$.subscribe(value =>
      this.cumulationInfo = [...value])
  }


  changeFunctions(selected: any) {
    if (selected.value === 'Normal') {
      this.service.getPointsNormal(
        this.formGroupNormal.controls.mu.value,
        this.formGroupNormal.controls.sigma.value);
    }
    if (selected.value === 'Beta4') {
      this.service.getPointsBeta4(
        this.formGroupBeta4.controls.alpha.value,
        this.formGroupBeta4.controls.beta.value,
        this.formGroupBeta4.controls.min.value,
        this.formGroupBeta4.controls.max.value);
    }
  }
}

