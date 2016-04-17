"use strict";

const mailViewStateController = function ($stateParams) {
    this.mailId = $stateParams.mailId;
};

export default mailViewStateController;