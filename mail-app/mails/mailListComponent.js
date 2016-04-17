"use strict";

import mailListTemplate from "./views/mail-list.html";
import MailListController from "./mailListController";

const mailList = {
    bindings: {
        folderName: "<"
    },
    template: mailListTemplate,
    controller: MailListController
};

export default mailList;

