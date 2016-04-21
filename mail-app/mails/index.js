"use strict";

import "../shared";
import "../services";
import foldersComponent from "./foldersComponent";
import mailPageComponent from "./mailPageComponent";
import mailListComponent from "./mailListComponent";
import mailViewComponent from "./mailViewComponent";
import autocompleteComponent from "./autocompleteComponent";
import mailStateTemplate from "./views/mail-state.html";
import mailListStateTemplate from "./views/mail-list-state.html";
import mailViewStateTemplate from "./views/mail-view-state.html";
import mailListStateController from "./mailListStateController";
import mailViewStateController from "./mailViewStateController";
import onExitMailViewState from "./onExitMailViewState";
import MailService from "./mailService";

const mails = angular.module("mails", ["common", "services", "ngMessages", "ui.router"]);

mails.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .when("/mail", ['$state', function ($state) {
            $state.go("mailList", {folderName: 'Inbox'});
        }])
        .otherwise("mail");

    $stateProvider
        .state("mail", {
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
