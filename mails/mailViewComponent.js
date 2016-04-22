"use strict";

import mailViewTemplate from "./views/mail-view.html";
import MailViewController from "./mailViewController";

const mailView = {
    bindings: {
        mailId:"<"
    },
    template: mailViewTemplate,
    controller: MailViewController
};

export default mailView;

