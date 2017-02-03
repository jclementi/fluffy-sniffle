import { Component, Input, OnInit } from '@angular/core';
import { ClientTokenService } from './client-token.service';

declare var braintree: any;

@Component ({
	selector: 'bt-hosted-fields',
	templateUrl: './app/hosted-fields.component.html',
	providers: [ClientTokenService]
})

export class HostedFieldsComponent implements OnInit {

	bt_isReady: boolean = false;
	bt_instance: any;

	constructor(private clientTokenService: ClientTokenService) { }


	ngOnInit(): void {

		this.clientTokenService.getClientToken().then(authorization => {
			braintree.client.create({
				authorization: authorization
			}, (clientErr: any, clientInstance: any) => {
				console.log("clientErr: "+clientErr);
				console.log("clientInstance: "+clientInstance);
				braintree.hostedFields.create({
					client: clientInstance,
					styles: {
						'input': {
							'font-size': '14pt'
						},
						'input.invalid': {
							'color': 'red'
						},
						'input.valid': {
							'color': 'green'
						}
					},
					fields: {
						number: {
							selector: '#card-number',
							placeholder: '4111 1111 1111 1111'
						},
						cvv: {
							selector: '#cvv',
							placeholder: '123'
						},
						expirationDate: {
							selector: '#expiration-date',
							placeholder: '10/2019'
						}
					}
				}, (hostedFieldsErr: any, hostedFieldsInstance: any): void => { this.bt_isReady = true; });
			});
		});

	}
}
