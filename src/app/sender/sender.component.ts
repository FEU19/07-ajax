import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
	selector: 'app-sender',
	templateUrl: './sender.component.html',
	styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
	message: string = 'Racoon';
	
	constructor(private messageService: MessageService) { }

	ngOnInit(): void { }

	sendMessage() {
		this.messageService.send('HELLO');
	}

	handleKeyUp(event) {
		this.message = event.target.value;
	}
}



//
