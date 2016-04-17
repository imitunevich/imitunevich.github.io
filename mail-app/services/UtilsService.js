"use strict";

const UtilsService = function () {
    this.normalizeToArray = function (object) {
        if (!object) return [];
        return Object.keys(object).map(key => {
            let normalizedObject = object[key];
            normalizedObject.id = key;
            return normalizedObject;
        });
    };

    this.baseURL = "https://fiery-inferno-8968.firebaseio.com/";
};

export default UtilsService;

