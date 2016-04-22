"use strict";

class ViewController {
    constructor(service, $state) {
        this.service = service;
        this.state = $state;
        this.item = service.selectedItem;
    }

    remove(dataName) {
        this.service.remove(this.item, dataName).then((response)=> {
            this.service.selectedItem = null;
            this.goToListState();
        });
    }

    getSelectedItem(folderName, itemId) {
        if (itemId) {
            this.service.getSelectedItem(folderName, itemId)
                .then((response) => {
                        this.item = response;
                        this.service.selectedItem = this.item;
                    }
                ).catch(error => console.log(error.message));
        } else {
            this.item = this.service.selectedItem = {};
        }
    }
}

export default ViewController;