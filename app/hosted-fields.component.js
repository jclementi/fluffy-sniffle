"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var client_token_service_1 = require('./client-token.service');
var HostedFieldsComponent = (function () {
    function HostedFieldsComponent(clientTokenService) {
        this.clientTokenService = clientTokenService;
        this.bt_isReady = false;
    }
    HostedFieldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientTokenService.getClientToken().then(function (authorization) {
            braintree.client.create({
                authorization: authorization
            }, function (clientErr, clientInstance) {
                console.log("clientErr: " + clientErr);
                console.log("clientInstance: " + clientInstance);
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
                }, function (hostedFieldsErr, hostedFieldsInstance) { _this.bt_isReady = true; });
            });
        });
    };
    HostedFieldsComponent = __decorate([
        core_1.Component({
            selector: 'bt-hosted-fields',
            templateUrl: './app/hosted-fields.component.html',
            providers: [client_token_service_1.ClientTokenService]
        }), 
        __metadata('design:paramtypes', [client_token_service_1.ClientTokenService])
    ], HostedFieldsComponent);
    return HostedFieldsComponent;
}());
exports.HostedFieldsComponent = HostedFieldsComponent;
//# sourceMappingURL=hosted-fields.component.js.map