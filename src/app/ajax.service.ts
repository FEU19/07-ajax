import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SunriseSunset } from './sunrise-sunset';

@Injectable({
	providedIn: 'root'
})
export class AjaxService {

	constructor(private http: HttpClient) { }

	getData(): Observable<SunriseSunset> {
		const url = 'https://api.sunrise-sunset.org/json';
		return this.http.get<SunriseSunset>(url);
	}
}




//
