"use strict";

import ListController  from "../commonControllers/listController";

class MailListController extends ListController {
    constructor(MailService) {
        super(MailService);
        this.service.selectedFolder = this.folderName;
    }

    loadMails() {
        this.service.getMails(this.folderName)
            .then((mails)=> {
                this.mails = mails;
            });
    }

    loadItems() {
        return this.loadMails();
    }

    get mails() {
        return this.items;
    }

    set mails(items) {
        this.items = items;
    }

    isMailSelected() {
        return this.service.selectedItem !== null;
    }
}

export default MailListController;

