import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HostedFieldsComponent } from './hosted-fields.component';

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [
		AppComponent,
		HostedFieldsComponent
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
