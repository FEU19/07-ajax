import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	private source = new BehaviorSubject<string>('Welcome');
	public observableSource = this.source.asObservable();

	send(message: string) {
		this.source.next(message);  // send message
	}

	constructor() { }
}
