import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError, Observable, Subject } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';

import { FontName } from './Models/font-name';

@Injectable(
  //{providedIn: 'root'}
)
export class FontNameManagerService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private apiUrl = 'api/fontNames';

  selectedFont: FontName;

  selectedFontChange: Subject<FontName> = new Subject<FontName>();

  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { 
    this.selectedFontChange.subscribe((value) => {
      this.selectedFont = value;
      console.log(`selectedFontChange: ${value}`);
    });
  }

  getFonts(): Observable<FontName[]>{
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
