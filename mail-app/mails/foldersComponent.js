"use strict";

import foldersTemplate from "./views/folder-list.html";

const folders = {
    template: foldersTemplate,
    controller: function (MailService) {
        this.getFolders = ()=> {
            MailService.getFolders().then((folders) => {
                this.folders = folders;
            });
        };
        this.getFolders();
    }
};

export default folders;

