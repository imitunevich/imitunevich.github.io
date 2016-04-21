"use strict";

class AutocomleteController {
    constructor(BaseService){
        BaseService.getData("users").then(responce => {
            this.contacts = this.contactsFull = responce;
            this.filterContacts();
        });
        this.contactsCash = {};
    }

    get term() {
        return this._term;
    }

    set term(value) {
        this._term = value;
        this.filterContacts();
    }

    filterContacts(){
        if(this.contactsFull){
            var contactsFromCash = this.contactsCash[this.term];
            if(contactsFromCash){
                this.contacts = contactsFromCash;
            }else{
                this.contacts = [];
                for(var i=0; i<this.contactsFull.length; i++){
                    var currentContact = this.contactsFull[i];
                    this.selectContact(currentContact,"fullName") || this.selectContact(currentContact,"email");
                }

                this.contactsCash[this.term] = this.contacts;

                if(this.contacts.length == 0) this.isVisible = false;
            }
        }
    }

    selectContact (contact,field){
        var updatedField = this.selectTerm(contact[field]);
        if(contact[field] != updatedField){
            var selectedContact = angular.copy(contact);
            selectedContact.realEmail = selectedContact.email;
            selectedContact[field] = updatedField;
            this.contacts.push(selectedContact);
            return true;
        }
        return false;
    }

    selectTerm (str){
        var re = new RegExp(this.term,"i");
        return str.replace(re,function(str){
            return `<b>${str}</b>`;
        });
    }
}

export default AutocomleteController;