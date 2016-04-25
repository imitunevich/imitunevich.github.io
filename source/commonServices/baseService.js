"use strict";

class BaseService {
    constructor($http, UtilsService) {
        this.http = $http;
        this.utilsService = UtilsService;
    }

    getData(dataName = this.dataName) {
        return this.http.get(`${this.utilsService.baseURL}${dataName}.json`)
            .then(response => this.utilsService.normalizeToArray(response.data))
            .catch(error => console.log(error.message));
    }

    getSelectedItem(folderName, itemId) {
        return this.http.get(`${this.utilsService.baseURL}${folderName.toLowerCase()}/${itemId}.json`);
    }

    add(newItem, dataName = this.dataName) {
        return this.http.post(`${this.utilsService.baseURL}${dataName}.json`, newItem)
            .then(response => {
                newItem.id = response.data.name;
                return newItem;
            })
            .catch(error => console.log(error.message));
    }

    update(item, dataName = this.dataName) {
        return this.http.put(`${this.utilsService.baseURL}${dataName}/${item.id}.json`, item)
            .then(response => response.data).
            catch(error => console.log(error.message));
    }

    remove(item, dataName = this.dataName) {
        return this.http.delete(`${this.utilsService.baseURL}${dataName}/${item.id}.json`)
            .then(response => response.data)
            .catch(error => console.log(error.message));
    }

    removeArray(arr, dataName = this.dataName) {
        let results = [];
        let i = 0;
        let length = arr.length;
        let removeNextItem = () => {
            return this.remove(arr[i], dataName)
                .then((response) => {
                    return (++i < length) ? removeNextItem() : true;
                })
                .catch(error => console.log(error.message));
        };
        return removeNextItem();
    }
}

export default BaseService;