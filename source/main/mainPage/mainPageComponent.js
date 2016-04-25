"use strict";

import mainPageTemplate from "./main-page.html";

const mainPage = {
    template: mainPageTemplate,
    controller: function ($state, AuthService) {
        this.pageList = [{
            title: "Mails",
            state: "mail"
        }, {
            title: "Contacts",
            state: "contacts"
        }];

        this.logOut = function(){
            AuthService.logOut();
            $state.go("auth");
        }
    }
};

export default mainPage;

