"use strict";

import customButtonTemplate from "./custom-button.html";

const customButton = {
    bindings: {
        name: "<",
        class: "<",
        disabled: "<",
        sref: "<",
        clickHandler: "&"
    },
    template: customButtonTemplate,
    controller: function () {
    }
};

export default customButton;
