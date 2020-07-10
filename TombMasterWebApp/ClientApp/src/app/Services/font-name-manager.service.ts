import { Injectable, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, Subject } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { FontName } from '../Models/font-name';

@Injectable(
  //{providedIn: 'root'}
)
export class FontNameManagerService implements OnChanges{
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private apiUrl = 'api/fontNames';

  fontPicked = false;

  @Input() font: FontName;

  selectedFontChange: Subject<FontName> = new Subject<FontName>();

  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {
    this.selectedFontChange.subscribe((value) => {
      console.log("font: " + value);
      this.font = value;
      this.fontPicked = value != undefined;
    });
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("changes");
  }

  getFonts(): Observable<FontName[]> {
    return this.http.get<FontName[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
}
