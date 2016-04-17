"use strict";

import BaseService from "../services/baseService"

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

    get selectedItem() {
        return this.selectedContact;
    }

    set selectedItem(contact) {
        this.selectedContact = contact;
    }
}

export default ContactService;