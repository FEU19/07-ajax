import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
	selector: 'app-receiver',
	templateUrl: './receiver.component.html',
	styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
	messageHistory: string[] = [];
	firstMessage: boolean = true;

	constructor(private messageService: MessageService) { }

	ngOnInit(): void {
		this.messageService.observableSource.subscribe(message => {
			if( this.firstMessage ) {
				// do not push
				this.firstMessage = false;
			} else {
				this.messageHistory.push(message);
			}
		})
	}

}







//
