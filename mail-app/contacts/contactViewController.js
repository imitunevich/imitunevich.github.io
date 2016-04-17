"use strict";

import ViewController from "../controllers/viewController";

class ContactViewController extends ViewController {
    constructor(ContactService, $state) {
        super(ContactService, $state);
        if (this.service.selectedItem === null) {

            this.getSelectedItem("users", this.contactId);

        } else {
            this.contact = this.service.selectedItem;
        }

        this.editMode = this.isNew ? true : false;

        this.mailFieldErrors = [
            {type: "required", text: "Please enter a value for this field"},
            {type: "email", text: "Enter a valid e-mail"}
        ];

        this.nameFieldErrors = [
            {type: "required", text: "Please enter a value for this field"},
            {type: "minlength", text: "This field can be at least 5 characters long"}
        ];
    }

    get contact() {
        return this.item;
    }

    set contact(item) {
        this.item = item;
    }

    get isNew() {
        return this.contactId === undefined;
    }

    edit() {
        this.editMode = true;
    }

    save() {
        if (this.isNew) {
            this.service.add(this.contact).then((response)=> {
                this.editMode = false;
                this.state.go("contactView", {contactId: this.contact.id});
            });
        } else {
            this.service.update(this.contact).then((response)=> {
                this.editMode = false;
            });
        }
    }

    goToListState() {
        this.state.go("contacts", {reload: 'contacts'});
    }
}

export default ContactViewController;