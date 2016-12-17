import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1>Hello {{name}}</h1>	
	<bt-hosted-fields>loading hosted fields...</bt-hosted-fields>`,
})
export class AppComponent  { name = 'Angular'; }
