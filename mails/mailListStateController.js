"use strict";
const mailListStateController = function ($stateParams) {
    this.folderName = $stateParams.folderName;
    //MailService.selectedFolder = this.folderName;
};

export default mailListStateController;
