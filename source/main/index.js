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
import authStateTemplate from "./states/auth/auth-state.html"
import mainStateTemplate from "./states/main/main-state.html"
import resolveMainState from "./states/main/resolveMainState"

const mailApp = angular.module("mailApp", [uiRouter, "mails", "contacts", "commonServices", "shared"]);

mailApp.config(function ($stateProvider) {
    $stateProvider
        .state("main", {
            state: "abstract",
            template: mainStateTemplate,
            resolve: resolveMainState
        })
        .state("auth", {
            template: authStateTemplate,
            url: "/login"
        })
});

mailApp.component("mainPage", mainPageComonent);
mailApp.component("topNav", topNavComponent);
mailApp.component("auth", authComponent);
mailApp.service("AuthService", AuthService);

export default mailApp;