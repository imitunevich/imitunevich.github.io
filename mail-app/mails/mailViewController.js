"use strict";

import ViewController  from "../controllers/viewController";

class MailViewController extends ViewController {
    constructor(MailService, $state) {
        super(MailService, $state);
        this.service.selectedItem = {};
        this.getSelectedItem(this.service.selectedFolder, this.mailId);


        this.mailFieldErrors = [
            {type: "required", text: "Please enter a value for this field"},
            {type: "email", text: "Enter a valid e-mail"}
        ];
    }

    get mail() {
        return this.item;
    }

    set mail(item) {
        this.item = item;
    }

    get isNew() {
        return this.mailId === undefined;
    }

    sendMail() {
        this.mail.date = new Date().getTime();
        this.service.sendMail(this.mail)
            .then(response => {
                this.service.selectedItem = null;
                this.state.go("mailList", {folderName: this.service.selectedFolder});
            })
            .catch(error => console.log(error.message));
    }

    goToListState() {
        this.state.go("mailList", {folderName: this.service.selectedFolder}, {reload: 'mailList'});
    }
}

export default MailViewController;