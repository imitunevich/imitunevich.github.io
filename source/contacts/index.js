"use strict";

import uiRouter from "angular-ui-router";
import ngMessages from "angular-messages";

import "../shared";
import "../commonServices";
import contactPageComponent from "./contactPage/contactPageComponent";
import contactListComponent from "./contactList/contactListComponent";
import contactViewComponent from "./contactView/contactViewComponent";
import changeDateFormatDirective from "./changeDateFormat/changeDateFormatDirective";
import ContactService from "./contactService";

const contacts = angular.module("contacts", [uiRouter, ngMessages, "shared", "commonServices"]);

contacts.config(function ($stateProvider) {
    $stateProvider
        .state("contacts", {
            parent: "main",
            url: "/contacts",
            template: "<contact-page></contact-page>"
        })
        .state("contactView", {
            parent: "contacts",
            url: "/contact?contactId",
            template: "<contact-view contact-id='$ctrl.contactId'></contact-view>",
            controller: function ($stateParams) {
                this.contactId = $stateParams.contactId;
            },
            controllerAs: "$ctrl"
        })
        .state("newContact", {
            parent: "contacts",
            url: "/newContact",
            template: "<contact-view></contact-view>"
        });
});

contacts.component("contactPage", contactPageComponent);
contacts.component("contactList", contactListComponent);
contacts.component("contactView", contactViewComponent);
contacts.directive("changeDateFormat", changeDateFormatDirective);
contacts.service("ContactService", ContactService);

export default contacts;
