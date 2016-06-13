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
            template: "<mail-page></mail-page>"
        })
        .state("mailList", {
            parent: "mail",
            url: "/folder?folderName",
            template: "<mail-list folder-name='$ctrl.folderName'></mail-list>",
            controller: function ($stateParams) {
                this.folderName = $stateParams.folderName;
            },
            controllerAs: "$ctrl"
        })
        .state("mailView", {
            parent: "mailList",
            url: "/mail?mailId",
            template: "<mail-view mail-id='$ctrl.mailId'></mail-view>",
            controller: function ($stateParams) {
                this.mailId = $stateParams.mailId;
            },
            controllerAs: "$ctrl",
            onExit: function (MailService) {
                MailService.selectedMail = null;
            }
        })
        .state("newMail", {
            parent: "mail",
            url: "/newMail",
            template: "<mail-view></mail-view>"
        });

});

mails.component("folders", foldersComponent);
mails.component("mailPage", mailPageComponent);
mails.component("mailList", mailListComponent);
mails.component("mailView", mailViewComponent);
mails.component("autocomplete", autocompleteComponent);
mails.service("MailService", MailService);

export default mails;
