import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SunComponent } from './sun/sun.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

@NgModule({
	declarations: [
		AppComponent,
		SunComponent,
		SenderComponent,
		ReceiverComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
