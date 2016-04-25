"use strict";

import ViewController  from "../../commonControllers/viewController";

class MailViewController extends ViewController {
    constructor(MailService, $state, $timeout) {
        super(MailService, $state);
        this.timeout = $timeout;
        this.service.selectedMail = {};
        this.getSelectedItem(this.service.selectedFolder, this.mailId);


        this.isAutocompleteVisible = false;
        this.isAutocompleteFocused = false;
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

    get isAutocompleteFocused(){
        return this._isAutocompleteFocused;
    }

    set isAutocompleteFocused(value) {
        this._isAutocompleteFocused = value;
        this.hideAutocomplete();
    }

    sendMail() {
        this.mail.date = new Date().getTime();
        this.service.sendMail(this.mail)
            .then(response => {
                console.log(this.service.selectedFolder);
                this.service.selectedMail = null;
                this.state.go("mailList", {folderName: this.service.selectedFolder});
            })
            .catch(error => console.log(error.message));
    }

    goToListState() {
        this.state.go("mailList", {folderName: this.service.selectedFolder}, {reload: 'mailList'});
    }

    onEmailChange(){
        this.isAutocompleteVisible = !!(this.mail.email);
    }

    onEmailBlur(){
        this.hideAutocomplete();
    }

    hideAutocomplete(){
        this.timeout(()=>{
            if(!this.isAutocompleteFocused){
                this.isAutocompleteVisible = false;
            }
        }, 150);
    }

    chooseContact(contact){
        this.mail.email = contact.realEmail;
        this.isAutocompleteVisible = false;
    }
}

export default MailViewController;