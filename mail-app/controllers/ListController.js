"use strict";

class ListController {
    constructor(service) {
        this.service = service;
        this.setSelectedItem(null);
        this.loadItems();
    }

    loadItems() {
        return this.items;
    }

    setSelectedItem(item) {
        this.service.selectedItem = item;
    }

    add() {
        this.service.selectedItem = {};
    }

    remove(dataName) {
        let delItems = [];
        let updatedItems = [];
        this.items.forEach((item)=> {
            if (item.checked) {
                delItems.push(item);
            } else {
                updatedItems.push(item);
            }
        });
        if (delItems.length > 0) {
            this.service.removeArray(delItems, dataName)
                .then((response) => {
                    if (response === true) this.items = updatedItems;
                })
                .catch(error => this.getItems());
        } else {
            alert("Please, choose items to delete.");
        }
    }
}

export default ListController;