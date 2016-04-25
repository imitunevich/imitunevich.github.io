"use strict";

import foldersTemplate from "./folder-list.html";

const folders = {
    template: foldersTemplate,
    controller: function (MailService) {
        this.getFolders = ()=> {
            MailService.getFolders().then((folders) => {
                this.folders = folders;
                if (!MailService.selectedFolder) MailService.selectedFolder = this.folders[0].name;
            });
        };
        this.getFolders();
    }
};

export default folders;

