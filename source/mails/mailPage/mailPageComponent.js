"use strict";

import mailPageTemplate from "./mail-page.html";

const mailPage = {
    template: mailPageTemplate,
    controller: function (MailService) {
        this.isMailSelected = () => {
            return MailService.selectedMail !== null;
        };
    }
};

export default mailPage;

