"use strict";

import mailListTemplate from "./mail-list.html";
import MailListController from "./mailListController";

const mailList = {
    bindings: {
        folderName: "<"
    },
    template: mailListTemplate,
    controller: MailListController
};

export default mailList;

