"use strict";

import ListController from "../../commonControllers/listController";

class ContactListController extends ListController {
    constructor(ContactService) {
        super(ContactService);
    }

    get contacts() {
        return this.items;
    }

    set contacts(items) {
        this.items = items;
    }

    loadContacts() {
        this.service.getData().then((contacts) => {
            this.contacts = contacts;
        });
    }

    loadItems() {
        return this.loadContacts();
    }

    setSelectedContact(contact) {
        this.setSelectedItem(contact);
    }
}

export default ContactListController;
