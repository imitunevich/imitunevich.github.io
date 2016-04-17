"use strict";

const onExitMailViewState = function (MailService) {
    MailService.selectedMail = null;
};

export default onExitMailViewState;