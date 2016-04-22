"use strict";

import autocompleteTemplate from "./views/autocomplete.html";
import AutocompleteController from "./autocompleteController"

const autocomplete = {
    bindings: {
        term: "<",
        hasFocus: "=",
        isVisible: "=",
        chooseContact: "&"
    },
    template: autocompleteTemplate,
    controller: AutocompleteController
};

export default autocomplete;