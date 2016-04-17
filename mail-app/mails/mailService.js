"use strict";

import BaseService from "../services/baseService";

class MailService extends BaseService {
    constructor($http, UtilsService) {
        super($http, UtilsService);
        this.selectedFolder = null;
        this.selectedMail = null;
    }

    getFolders() {
        return this.getData("folders");
    }

    getMails(folderName) {
        return this.getData(folderName.toLowerCase());
    }

    getSelectedItem(folderName, mailId) {
        return super.getSelectedItem(folderName, mailId)
            .then(response => {
                response.data.id = mailId;
                response.data.folder = folderName;
                return response.data;
            })
            .catch(error => console.log(error.message));
    }

    sendMail(mail) {
        return this.add(mail, "sent");
    }

    get selectedItem() {
        return this.selectedMail;
    }

    set selectedItem(mail) {
        this.selectedMail = mail;
    }

}

export default MailService;
