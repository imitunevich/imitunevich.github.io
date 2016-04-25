"use strict";

import uiRouter from "angular-ui-router";
import ngMessages from "angular-messages";

import "../shared";
import "../commonServices";
import contactPageComponent from "./contactPage/contactPageComponent";
import contactListComponent from "./contactList/contactListComponent";
import contactViewComponent from "./contactView/contactViewComponent";
import changeDateFormatDirective from "./changeDateFormat/changeDateFormatDirective";
import contactsStateTemplate from "./states/contactsState/contacts-state.html";
import contactViewStateTemplate from "./states/contactViewState/contact-view-state.html";
import contactViewStateController from "./states/contactViewState/contactViewStateController";
import ContactService from "./contactService";

const contacts = angular.module("contacts", [uiRouter, ngMessages, "shared", "commonServices"]);

contacts.config(function ($stateProvider) {
    $stateProvider
        .state("contacts", {
            parent: "main",
            url: "/contacts",
            template: contactsStateTemplate
        })
        .state("contactView", {
            parent: "contacts",
            url: "/contact?contactId",
            template: contactViewStateTemplate,
            controller: "contactViewStateController as $ctrl"
        })
        .state("newContact", {
            parent: "contacts",
            url: "/newContact",
            template: contactViewStateTemplate
        });
});

contacts.component("contactPage", contactPageComponent);
contacts.component("contactList", contactListComponent);
contacts.component("contactView", contactViewComponent);
contacts.directive("changeDateFormat", changeDateFormatDirective);
contacts.controller("contactViewStateController", contactViewStateController);
contacts.service("ContactService", ContactService);

export default contacts;
