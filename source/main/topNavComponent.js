"use strict";

import topNavTemplate from "./views/top-nav.html";

const topNav = {
    bindings: {
        navList: "<"
    },
    template: topNavTemplate,
    controller: function (ContactService,MailService) {
        this.reset = function () {
            ContactService.selectedContact = null;
            MailService.selectedMail = null;
        }
    }
};

export default topNav;

