"use strict";

import mainPageTemplate from "./main-page.html";

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

