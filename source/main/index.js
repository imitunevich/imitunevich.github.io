"use strict";

import angular from "angular";
import uiRouter from "angular-ui-router";

import "../mails";
import "../contacts";
import "../shared";
import "../commonServices";

import mainPageComonent from "./mainPage/mainPageComponent";
import topNavComponent from "./topNav/topNavComponent";
import authComponent from "./auth/authComponent"
import AuthService from "./authService";

const mailApp = angular.module("mailApp", [uiRouter, "mails", "contacts", "commonServices", "shared"]);

mailApp.config(function ($stateProvider) {
    $stateProvider
        .state("main", {
            state: "abstract",
            template: "<main-page></main-page>",
            resolve: {
                auth: function ($timeout, $state, AuthService) {
                    if (!AuthService.hasLoggedInUser()) {
                        $timeout(function () {
                            $state.go('auth');
                        });
                    }
                }
            }
        })
        .state("auth", {
            template: "<auth></auth>",
            url: "/login"
        })
});

mailApp.component("mainPage", mainPageComonent);
mailApp.component("topNav", topNavComponent);
mailApp.component("auth", authComponent);
mailApp.service("AuthService", AuthService);

export default mailApp;