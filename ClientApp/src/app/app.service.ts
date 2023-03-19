import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

export class BaseGraphics {
  collectionDensity: Point[];
  collectionCumulation: Point[];
}

export class Point {
  X: number;
  Y: number;
}

export class NormalRequest {
  Mu: number;
  Sigma: number;
}

@Injectable()
export class Service {
  points: any
  baseURL: string = "https://localhost:7286/";

  pointsDensity$ = new BehaviorSubject<Point[]>([]);
  pointsCumulation$ = new BehaviorSubject<Point[]>([]);

  constructor(private readonly http: HttpClient) {
  }

  getPointsNormal(mu: number | null, sigma: number | null): void {
    this.http.get<BaseGraphics>(this.baseURL + 'Point/normal', {
      params: new HttpParams()
        .set(`Mu`, mu!)
        .set(`Sigma`, sigma!)
    })
      .subscribe(respone => {
          this.pointsDensity$.next(respone.collectionDensity);
          this.pointsCumulation$.next(respone.collectionCumulation);
        }
      )
  }

  getPointsBeta4(alpha: number | null, beta: number | null, minimum: number | null, maximum: number | null): void {
    this.http.get<BaseGraphics>(this.baseURL + 'Point/beta4', {
      params: new HttpParams()
        .set(`alpha`, alpha!)
        .set(`beta`, beta!)
        .set(`minimum`, minimum!)
        .set(`maximum`, maximum!)
    })
      .subscribe(respone => {
          console.log(respone);
          this.pointsDensity$.next(respone.collectionDensity);
          this.pointsCumulation$.next(respone.collectionCumulation);
        }
      )
  }
}
