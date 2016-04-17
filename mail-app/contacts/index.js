"use strict";

import "../shared";
import "../services";
import contactPageComponent from "./contactPageComponent";
import contactListComponent from "./contactListComponent";
import contactViewComponent from "./contactViewComponent";
import changeDateFormatDirective from "./changeDateFormatDirective";
import contactsStateTemplate from "./views/contacts-state.html";
import contactViewStateTemplate from "./views/contact-view-state.html";
import contactViewStateController from "./contactViewStateController";
import ContactService from "./contactService";

const contacts = angular.module("contacts", ["common", "services", "ngMessages", "ui.router"]);

contacts.config(function ($stateProvider) {
    $stateProvider
        .state("contacts", {
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
