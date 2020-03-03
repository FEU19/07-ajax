import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';
import { Observable } from 'rxjs';
import { SunriseSunset } from '../sunrise-sunset';

@Component({
	selector: 'app-sun',
	templateUrl: './sun.component.html',
	styleUrls: ['./sun.component.css']
})
export class SunComponent implements OnInit {
	sunInformation: SunriseSunset = null;

	constructor(private ajaxService: AjaxService) { }

	ngOnInit(): void { }

	getSunriseSunsetData() {
		let observable: Observable<SunriseSunset> = this.ajaxService.getData();
		const handleData = (data: SunriseSunset): void => {
			console.log('Got data from API:', data);
			this.sunInformation = data;
		}
		observable.subscribe(handleData);
	}
}





//
