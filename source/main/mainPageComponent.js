"use strict";

import mainPageTemplate from "./views/main-page.html";

const mainPage = {
    template: mainPageTemplate,
    controller: function () {
        this.pageList = [{
            title: "Mails",
            state: "mail"
        }, {
            title: "Contacts",
            state: "contacts"
        }];
    }
};

export default mainPage;

