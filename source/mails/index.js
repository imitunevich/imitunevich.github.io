"use strict";

import uiRouter from "angular-ui-router";
import ngMessages from "angular-messages";
import ngSanitize from "angular-sanitize";

import "../shared";
import "../commonServices";

import foldersComponent from "./folders/foldersComponent";
import mailPageComponent from "./mailPage/mailPageComponent";
import mailListComponent from "./mailList/mailListComponent";
import mailViewComponent from "./mailView/mailViewComponent";
import autocompleteComponent from "./autocomplete/autocompleteComponent";
import mailStateTemplate from "./states/mailState/mail-state.html";
import mailListStateTemplate from "./states/mailListState/mail-list-state.html";
import mailViewStateTemplate from "./states/mailViewState/mail-view-state.html";
import mailListStateController from "./states/mailListState/mailListStateController";
import mailViewStateController from "./states/mailViewState/mailViewStateController";
import onExitMailViewState from "./states/mailViewState/onExitMailViewState";
import MailService from "./mailService";

const mails = angular.module("mails", [uiRouter, ngMessages, ngSanitize, "shared", "commonServices"]);

mails.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .when("/mail", ['$state', function ($state) {
            $state.go("mailList", {folderName: 'Inbox'});
        }])
        .otherwise("mail");

    $stateProvider
        .state("mail", {
            parent: "main",
            url: "/mail",
            template: mailStateTemplate
        })
        .state("mailList", {
            parent: "mail",
            url: "/folder?folderName",
            template: mailListStateTemplate,
            controller: "mailListStateController",
            controllerAs: "$ctrl"
        })
        .state("mailView", {
            parent: "mailList",
            url: "/mail?mailId",
            template: mailViewStateTemplate,
            controller: "mailViewStateController as $ctrl",
            onExit: onExitMailViewState
        })
        .state("newMail", {
            parent: "mail",
            url: "/newMail",
            template: mailViewStateTemplate
        });

});

mails.component("folders", foldersComponent);
mails.component("mailPage", mailPageComponent);
mails.component("mailList", mailListComponent);
mails.component("mailView", mailViewComponent);
mails.component("autocomplete", autocompleteComponent);
mails.controller("mailListStateController", mailListStateController);
mails.controller("mailViewStateController", mailViewStateController);
mails.service("MailService", MailService);

export default mails;
