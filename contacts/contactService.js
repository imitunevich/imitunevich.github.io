"use strict";

import BaseService from "../commonServices/baseService"

class ContactService extends BaseService {
    constructor($http, UtilsService) {
        super($http, UtilsService);
        this.selectedContact = null;
        this.dataName = "users";
    }

    getSelectedItem(folderName, contactId) {
        return super.getSelectedItem(folderName, contactId)
            .then(response => {
                response.data.id = contactId;
                return response.data;
            })
            .catch(error => console.log(error.message));
    }

    get selectedContact() {
        return this.selectedItem;
    }

    set selectedContact(contact) {
        this.selectedItem = contact;
    }
}

export default ContactService;