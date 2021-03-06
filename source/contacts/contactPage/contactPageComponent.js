"use strict";

import contactPageTemplate from "./contact-page.html";

const contactPage = {
    template: contactPageTemplate,
    controller: function (ContactService) {
        this.isContactSelected = () => {
            return ContactService.selectedContact !== null;
        };
    }
};

export default contactPage;

