"use strict";

import contactViewTemplate from "./views/contact-view.html";
import contactViewController from "./contactViewController";

const contactView = {
    bindings: {
        contactId:"<"
    },
    template: contactViewTemplate,
    controller: contactViewController
};

export default contactView;

