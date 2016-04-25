"use strict";

import authTemplate from "./auth.html";

const auth = {
    bindings: {
        nextState: "="
    },
    template: authTemplate,
    controller: function ($state, AuthService) {
        //remove credentials for testing
        this.login = "user";
        this.password = "password";

        this.hasError = false;

        this.logIn = function () {
            AuthService.credentials = {
                login: this.login,
                password: this.password
            };

            AuthService.logIn().then(response => {
                if (AuthService.hasLoggedInUser()) {
                    $state.go("mail");
                } else {
                    this.showErrorMessage();
                }
            }).catch(error =>this.showErrorMessage())
        };

        this.showErrorMessage = function () {
            this.hasError = true;
        }
    }
};

export default auth;