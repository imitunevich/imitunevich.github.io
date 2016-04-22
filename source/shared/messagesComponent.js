"use strict";

import messagesTemplate from "./views/messages.html";

const messages = {
    bindings: {
        element: "<",
        errors: "<",
        visibility: "<"
    },
    template: messagesTemplate,
    controller: function () {
    }
};

export default messages;