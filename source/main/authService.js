"use strict";

const AuthService = function ($window, $http, UtilsService) {
    this.credentials = null;

    this.hasLoggedInUser = function () {
        return $window.sessionStorage.access_token;
    };

    this.logOut = function () {
        delete $window.sessionStorage.access_token;
    };

    this.logIn = function () {
        return $http.get(`${UtilsService.baseURL}authenticated/${this.credentials.login}.json`)
            .then((responce) => {
                if (this.credentials.password == responce.data) {
                    $window.sessionStorage.access_token = Date.now();
                } else {
                    delete $window.sessionStorage.access_token;
                }
                return $window.sessionStorage.access_token;
            })
            .catch(error => {
                delete $window.sessionStorage.access_token;
            })
    };
};

export default AuthService;