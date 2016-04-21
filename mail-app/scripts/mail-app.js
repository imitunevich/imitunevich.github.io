/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

		__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(2);

	__webpack_require__(33);

	__webpack_require__(8);

	var _mainPageComponent = __webpack_require__(47);

	var _mainPageComponent2 = _interopRequireDefault(_mainPageComponent);

	var _topNavComponent = __webpack_require__(49);

	var _topNavComponent2 = _interopRequireDefault(_topNavComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailApp = angular.module("mailApp", ["mails", "contacts", "services"]);

	mailApp.component("mainPage", _mainPageComponent2.default);
	mailApp.component("topNav", _topNavComponent2.default);

	exports.default = mailApp;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(3);

	__webpack_require__(8);

	var _foldersComponent = __webpack_require__(11);

	var _foldersComponent2 = _interopRequireDefault(_foldersComponent);

	var _mailPageComponent = __webpack_require__(13);

	var _mailPageComponent2 = _interopRequireDefault(_mailPageComponent);

	var _mailListComponent = __webpack_require__(15);

	var _mailListComponent2 = _interopRequireDefault(_mailListComponent);

	var _mailViewComponent = __webpack_require__(19);

	var _mailViewComponent2 = _interopRequireDefault(_mailViewComponent);

	var _autocompleteComponent = __webpack_require__(23);

	var _autocompleteComponent2 = _interopRequireDefault(_autocompleteComponent);

	var _mailState = __webpack_require__(26);

	var _mailState2 = _interopRequireDefault(_mailState);

	var _mailListState = __webpack_require__(27);

	var _mailListState2 = _interopRequireDefault(_mailListState);

	var _mailViewState = __webpack_require__(28);

	var _mailViewState2 = _interopRequireDefault(_mailViewState);

	var _mailListStateController = __webpack_require__(29);

	var _mailListStateController2 = _interopRequireDefault(_mailListStateController);

	var _mailViewStateController = __webpack_require__(30);

	var _mailViewStateController2 = _interopRequireDefault(_mailViewStateController);

	var _onExitMailViewState = __webpack_require__(31);

	var _onExitMailViewState2 = _interopRequireDefault(_onExitMailViewState);

	var _mailService = __webpack_require__(32);

	var _mailService2 = _interopRequireDefault(_mailService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mails = angular.module("mails", ["common", "services", "ngMessages", "ui.router"]);

	mails.config(function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.when("/mail", ['$state', function ($state) {
	        $state.go("mailList", { folderName: 'Inbox' });
	    }]).otherwise("mail");

	    $stateProvider.state("mail", {
	        url: "/mail",
	        template: _mailState2.default
	    }).state("mailList", {
	        parent: "mail",
	        url: "/folder?folderName",
	        template: _mailListState2.default,
	        controller: "mailListStateController",
	        controllerAs: "$ctrl"
	    }).state("mailView", {
	        parent: "mailList",
	        url: "/mail?mailId",
	        template: _mailViewState2.default,
	        controller: "mailViewStateController as $ctrl",
	        onExit: _onExitMailViewState2.default
	    }).state("newMail", {
	        parent: "mail",
	        url: "/newMail",
	        template: _mailViewState2.default
	    });
	});

	mails.component("folders", _foldersComponent2.default);
	mails.component("mailPage", _mailPageComponent2.default);
	mails.component("mailList", _mailListComponent2.default);
	mails.component("mailView", _mailViewComponent2.default);
	mails.component("autocomplete", _autocompleteComponent2.default);
	mails.controller("mailListStateController", _mailListStateController2.default);
	mails.controller("mailViewStateController", _mailViewStateController2.default);
	mails.service("MailService", _mailService2.default);

	exports.default = mails;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _customButtonComponent = __webpack_require__(4);

	var _customButtonComponent2 = _interopRequireDefault(_customButtonComponent);

	var _messagesComponent = __webpack_require__(6);

	var _messagesComponent2 = _interopRequireDefault(_messagesComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var common = angular.module("common", []);

	common.component("customButton", _customButtonComponent2.default);
	common.component("messages", _messagesComponent2.default);

	exports.default = common;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _customButton = __webpack_require__(5);

	var _customButton2 = _interopRequireDefault(_customButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var customButton = {
	    bindings: {
	        name: "<",
	        class: "<",
	        disabled: "<",
	        sref: "<",
	        clickHandler: "&"
	    },
	    template: _customButton2.default,
	    controller: function controller() {}
	};

		exports.default = customButton;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<!--TODO: create buttons-container-->\r\n<div ng-class=\"['button', $ctrl.class, {disabled : $ctrl.disabled}]\">\r\n    <a ng-if=\"$ctrl.sref\" role=\"button\" ng-click=\"$ctrl.clickHandler()\" href=\"javascript:void(0)\" ui-sref=\"{{$ctrl.sref}}\">{{$ctrl.name}}</a>\r\n    <a ng-if=\"!$ctrl.sref\" role=\"button\" ng-click=\"$ctrl.clickHandler()\" href=\"javascript:void(0)\">{{$ctrl.name}}</a>\r\n</div>\r\n"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _messages = __webpack_require__(7);

	var _messages2 = _interopRequireDefault(_messages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var messages = {
	    bindings: {
	        element: "<",
	        errors: "<",
	        visibility: "<"
	    },
	    template: _messages2.default,
	    controller: function controller() {}
	};

		exports.default = messages;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"error_msg\" ng-messages=\"$ctrl.element.$error\" role=\"alert\" ng-if=\"$ctrl.visibility\">\r\n    <span ng-repeat=\"err in $ctrl.errors\" ng-message-exp=\"err.type\" class=\"msg\" >{{err.text}}</span>\r\n</div>"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseService = __webpack_require__(9);

	var _baseService2 = _interopRequireDefault(_baseService);

	var _utilsService = __webpack_require__(10);

	var _utilsService2 = _interopRequireDefault(_utilsService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var services = angular.module("services", []);

	services.service("BaseService", _baseService2.default);
	services.service("UtilsService", _utilsService2.default);

	exports.default = services;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseService = function () {
	    function BaseService($http, UtilsService) {
	        _classCallCheck(this, BaseService);

	        this.http = $http;
	        this.utilsService = UtilsService;
	    }

	    _createClass(BaseService, [{
	        key: "getData",
	        value: function getData() {
	            var _this = this;

	            var dataName = arguments.length <= 0 || arguments[0] === undefined ? this.dataName : arguments[0];

	            return this.http.get("" + this.utilsService.baseURL + dataName + ".json").then(function (response) {
	                return _this.utilsService.normalizeToArray(response.data);
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "getSelectedItem",
	        value: function getSelectedItem(folderName, itemId) {
	            return this.http.get("" + this.utilsService.baseURL + folderName.toLowerCase() + "/" + itemId + ".json");
	        }
	    }, {
	        key: "add",
	        value: function add(newItem) {
	            var dataName = arguments.length <= 1 || arguments[1] === undefined ? this.dataName : arguments[1];

	            return this.http.post("" + this.utilsService.baseURL + dataName + ".json", newItem).then(function (response) {
	                newItem.id = response.data.name;
	                return newItem;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "update",
	        value: function update(item) {
	            var dataName = arguments.length <= 1 || arguments[1] === undefined ? this.dataName : arguments[1];

	            return this.http.put("" + this.utilsService.baseURL + dataName + "/" + item.id + ".json", item).then(function (response) {
	                return response.data;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "remove",
	        value: function remove(item) {
	            var dataName = arguments.length <= 1 || arguments[1] === undefined ? this.dataName : arguments[1];

	            return this.http.delete("" + this.utilsService.baseURL + dataName + "/" + item.id + ".json").then(function (response) {
	                return response.data;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "removeArray",
	        value: function removeArray(arr) {
	            var _this2 = this;

	            var dataName = arguments.length <= 1 || arguments[1] === undefined ? this.dataName : arguments[1];

	            var results = [];
	            var i = 0;
	            var length = arr.length;
	            var removeNextItem = function removeNextItem() {
	                return _this2.remove(arr[i], dataName).then(function (response) {
	                    return ++i < length ? removeNextItem() : true;
	                }).catch(function (error) {
	                    return console.log(error.message);
	                });
	            };
	            return removeNextItem();
	        }
	    }]);

	    return BaseService;
	}();

		exports.default = BaseService;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var UtilsService = function UtilsService() {
	    this.normalizeToArray = function (object) {
	        if (!object) return [];
	        return Object.keys(object).map(function (key) {
	            var normalizedObject = object[key];
	            normalizedObject.id = key;
	            return normalizedObject;
	        });
	    };

	    this.baseURL = "https://fiery-inferno-8968.firebaseio.com/";
	};

		exports.default = UtilsService;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _folderList = __webpack_require__(12);

	var _folderList2 = _interopRequireDefault(_folderList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var folders = {
	    template: _folderList2.default,
	    controller: function controller(MailService) {
	        var _this = this;

	        this.getFolders = function () {
	            MailService.getFolders().then(function (folders) {
	                _this.folders = folders;
	                if (!MailService.selectedFolder) MailService.selectedFolder = _this.folders[0].name;
	            });
	        };
	        this.getFolders();
	    }
	};

		exports.default = folders;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<ul>\r\n    <li ng-repeat=\"folder in $ctrl.folders\">\r\n        <a ui-sref=\"mailList({folderName:folder.name})\"\r\n           ui-sref-active=\"active\"\r\n           ng-class=\"['folder', folder.name.toLowerCase().slice(0, 3)]\">\r\n            {{folder.name}}\r\n        </a>\r\n    </li>\r\n</ul>"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mailPage = __webpack_require__(14);

	var _mailPage2 = _interopRequireDefault(_mailPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailPage = {
	    template: _mailPage2.default,
	    controller: function controller(MailService) {
	        this.isMailSelected = function () {
	            return MailService.selectedMail !== null;
	        };
	    }
	};

		exports.default = mailPage;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"left_col\">\r\n    <nav class=\"mail_menu\">\r\n        <div class=\"buttons\">\r\n            <custom-button class=\"'nmes'\" name=\"'New message'\" sref=\"'newMail'\"></custom-button>\r\n        </div>\r\n        <folders></folders>\r\n    </nav>\r\n</div>\r\n<div class=\"right_col\">\r\n    <ui-view></ui-view>\r\n</div>"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mailList = __webpack_require__(16);

	var _mailList2 = _interopRequireDefault(_mailList);

	var _mailListController = __webpack_require__(17);

	var _mailListController2 = _interopRequireDefault(_mailListController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailList = {
	    bindings: {
	        folderName: "<"
	    },
	    template: _mailList2.default,
	    controller: _mailListController2.default
	};

		exports.default = mailList;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mail_list\" ng-if=\"!$ctrl.isMailSelected()\">\r\n    <div class=\"buttons\">\r\n        <custom-button class=\"'del'\" name=\"'Delete'\"\r\n                       click-handler=\"$ctrl.remove($ctrl.folderName.toLowerCase())\"></custom-button>\r\n    </div>\r\n    <ul>\r\n        <li ng-repeat=\"mail in $ctrl.mails | orderBy: '-date'\">\r\n            <input type=\"checkbox\" ng-model=\"mail.checked\"/>\r\n            <div class=\"row\" ui-sref=\"mailView({mailId:mail.id})\">\r\n                <div class=\"mail_address\">\r\n                    <a>{{mail.name ? mail.name : mail.email}}</a>\r\n                </div>\r\n                <div class=\"mail_content\">\r\n                    <span class=\"topic\">{{mail.topic}}</span>\r\n                    <span class=\"mail_fragment\">{{mail.letterBody}}</span>\r\n                </div>\r\n                <span class=\"date\">{{mail.date | date: 'dd/MM/yyyy'}}</span>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<ui-view></ui-view>\r\n"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listController = __webpack_require__(18);

	var _listController2 = _interopRequireDefault(_listController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MailListController = function (_ListController) {
	    _inherits(MailListController, _ListController);

	    function MailListController(MailService) {
	        _classCallCheck(this, MailListController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MailListController).call(this, MailService));

	        _this.service.selectedFolder = _this.folderName;
	        return _this;
	    }

	    _createClass(MailListController, [{
	        key: "loadMails",
	        value: function loadMails() {
	            var _this2 = this;

	            this.service.getMails(this.folderName).then(function (mails) {
	                _this2.mails = mails;
	            });
	        }
	    }, {
	        key: "loadItems",
	        value: function loadItems() {
	            return this.loadMails();
	        }
	    }, {
	        key: "isMailSelected",
	        value: function isMailSelected() {
	            return this.service.selectedItem !== null;
	        }
	    }, {
	        key: "mails",
	        get: function get() {
	            return this.items;
	        },
	        set: function set(items) {
	            this.items = items;
	        }
	    }]);

	    return MailListController;
	}(_listController2.default);

		exports.default = MailListController;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListController = function () {
	    function ListController(service) {
	        _classCallCheck(this, ListController);

	        this.service = service;
	        this.setSelectedItem(null);
	        this.loadItems();
	    }

	    _createClass(ListController, [{
	        key: "loadItems",
	        value: function loadItems() {
	            return this.items;
	        }
	    }, {
	        key: "setSelectedItem",
	        value: function setSelectedItem(item) {
	            this.service.selectedItem = item;
	        }
	    }, {
	        key: "add",
	        value: function add() {
	            this.service.selectedItem = {};
	        }
	    }, {
	        key: "remove",
	        value: function remove(dataName) {
	            var _this = this;

	            var delItems = [];
	            var updatedItems = [];
	            this.items.forEach(function (item) {
	                if (item.checked) {
	                    delItems.push(item);
	                } else {
	                    updatedItems.push(item);
	                }
	            });
	            if (delItems.length > 0) {
	                this.service.removeArray(delItems, dataName).then(function (response) {
	                    if (response === true) _this.items = updatedItems;
	                }).catch(function (error) {
	                    return _this.getItems();
	                });
	            } else {
	                alert("Please, choose items to delete.");
	            }
	        }
	    }]);

	    return ListController;
	}();

		exports.default = ListController;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mailView = __webpack_require__(20);

	var _mailView2 = _interopRequireDefault(_mailView);

	var _mailViewController = __webpack_require__(21);

	var _mailViewController2 = _interopRequireDefault(_mailViewController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailView = {
	    bindings: {
	        mailId: "<"
	    },
	    template: _mailView2.default,
	    controller: _mailViewController2.default
	};

		exports.default = mailView;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mail_view\">\r\n\r\n    <div class=\"buttons\">\r\n        <custom-button class=\"'send'\" name=\"'Send'\" ng-if=\"$ctrl.isNew\"\r\n                       click-handler=\"$ctrl.sendMail()\" disabled=\"newMailForm.$invalid\"></custom-button>\r\n        <custom-button class=\"'del'\" name=\"'Delete'\" ng-if=\"!$ctrl.isNew\"\r\n                       click-handler=\"$ctrl.remove($ctrl.mail.folder.toLowerCase())\"></custom-button>\r\n    </div>\r\n    <div ng-if=\"!$ctrl.isNew\" class=\"received_msg\">\r\n        <div class=\"header\">\r\n            <div class=\"topic\">{{$ctrl.mail.topic}}</div>\r\n            <div class=\"name\" ng-if=\"$ctrl.mail.name\">{{$ctrl.mail.name}}</div>\r\n            <div class=\"email\">{{$ctrl.mail.email}}</div>\r\n            <div class=\"date\">{{$ctrl.mail.date | date: 'dd/MM/yyyy'}}</div>\r\n        </div>\r\n        <div class=\"letter_body\">\r\n            {{$ctrl.mail.letterBody}}\r\n        </div>\r\n    </div>\r\n    <form name=\"newMailForm\" novalidate>\r\n        <div ng-if=\"$ctrl.isNew\" class=\"new_msg\">\r\n            <div class=\"email\">\r\n                <label>To:</label>\r\n                <input name=\"email\" ng-model=\"$ctrl.mail.email\"\r\n                       ng-model-options=\"{allowInvalid: true}\"\r\n                       ng-change=\"$ctrl.onEmailChange()\" ng-blur=\"$ctrl.onEmailBlur()\"\r\n                       autocomplete=\"off\" type=\"email\" required>\r\n                <messages element=\"newMailForm.email\" errors=\"$ctrl.mailFieldErrors\"\r\n                          visibility=\"newMailForm.email.$dirty\"></messages>\r\n                <autocomplete term=\"$ctrl.mail.email\" has-focus=\"$ctrl.isAutocompleteFocused\" is-visible=\"$ctrl.isAutocompleteVisible\" choose-contact=\"$ctrl.chooseContact(contact)\" ng-if=\"$ctrl.isAutocompleteVisible\"></autocomplete>\r\n            </div>\r\n            <div class=\"topic\">\r\n                <label>Subject:</label>\r\n                <input ng-model=\"$ctrl.mail.topic\">\r\n            </div>\r\n\r\n            <textarea class=\"letter_body\" ng-model=\"$ctrl.mail.letterBody\"></textarea>\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _viewController = __webpack_require__(22);

	var _viewController2 = _interopRequireDefault(_viewController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MailViewController = function (_ViewController) {
	    _inherits(MailViewController, _ViewController);

	    function MailViewController(MailService, $state, $timeout) {
	        _classCallCheck(this, MailViewController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MailViewController).call(this, MailService, $state));

	        _this.timeout = $timeout;
	        _this.service.selectedMail = {};
	        _this.getSelectedItem(_this.service.selectedFolder, _this.mailId);

	        _this.isAutocompleteVisible = false;
	        _this.isAutocompleteFocused = false;
	        _this.mailFieldErrors = [{ type: "required", text: "Please enter a value for this field" }, { type: "email", text: "Enter a valid e-mail" }];
	        return _this;
	    }

	    _createClass(MailViewController, [{
	        key: "sendMail",
	        value: function sendMail() {
	            var _this2 = this;

	            this.mail.date = new Date().getTime();
	            this.service.sendMail(this.mail).then(function (response) {
	                console.log(_this2.service.selectedFolder);
	                _this2.service.selectedMail = null;
	                _this2.state.go("mailList", { folderName: _this2.service.selectedFolder });
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "goToListState",
	        value: function goToListState() {
	            this.state.go("mailList", { folderName: this.service.selectedFolder }, { reload: 'mailList' });
	        }
	    }, {
	        key: "onEmailChange",
	        value: function onEmailChange() {
	            this.isAutocompleteVisible = !!this.mail.email;
	        }
	    }, {
	        key: "onEmailBlur",
	        value: function onEmailBlur() {
	            this.hideAutocomplete();
	        }
	    }, {
	        key: "hideAutocomplete",
	        value: function hideAutocomplete() {
	            var _this3 = this;

	            this.timeout(function () {
	                if (!_this3.isAutocompleteFocused) {
	                    _this3.isAutocompleteVisible = false;
	                }
	            }, 150);
	        }
	    }, {
	        key: "chooseContact",
	        value: function chooseContact(contact) {
	            this.mail.email = contact.realEmail;
	            this.isAutocompleteVisible = false;
	        }
	    }, {
	        key: "mail",
	        get: function get() {
	            return this.item;
	        },
	        set: function set(item) {
	            this.item = item;
	        }
	    }, {
	        key: "isNew",
	        get: function get() {
	            return this.mailId === undefined;
	        }
	    }, {
	        key: "isAutocompleteFocused",
	        get: function get() {
	            return this._isAutocompleteFocused;
	        },
	        set: function set(value) {
	            this._isAutocompleteFocused = value;
	            this.hideAutocomplete();
	        }
	    }]);

	    return MailViewController;
	}(_viewController2.default);

		exports.default = MailViewController;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewController = function () {
	    function ViewController(service, $state) {
	        _classCallCheck(this, ViewController);

	        this.service = service;
	        this.state = $state;
	        this.item = service.selectedItem;
	    }

	    _createClass(ViewController, [{
	        key: "remove",
	        value: function remove(dataName) {
	            var _this = this;

	            this.service.remove(this.item, dataName).then(function (response) {
	                _this.service.selectedItem = null;
	                _this.goToListState();
	            });
	        }
	    }, {
	        key: "getSelectedItem",
	        value: function getSelectedItem(folderName, itemId) {
	            var _this2 = this;

	            if (itemId) {
	                this.service.getSelectedItem(folderName, itemId).then(function (response) {
	                    _this2.item = response;
	                    _this2.service.selectedItem = _this2.item;
	                }).catch(function (error) {
	                    return console.log(error.message);
	                });
	            } else {
	                this.item = this.service.selectedItem = {};
	            }
	        }
	    }]);

	    return ViewController;
	}();

		exports.default = ViewController;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _autocomplete = __webpack_require__(24);

	var _autocomplete2 = _interopRequireDefault(_autocomplete);

	var _autocompleteController = __webpack_require__(25);

	var _autocompleteController2 = _interopRequireDefault(_autocompleteController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var autocomplete = {
	    bindings: {
	        term: "<",
	        hasFocus: "=",
	        isVisible: "=",
	        chooseContact: "&"
	    },
	    template: _autocomplete2.default,
	    controller: _autocompleteController2.default
	};

		exports.default = autocomplete;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"autocomplete\">\r\n    <ul>\r\n        <li ng-repeat=\"contact in $ctrl.contacts\"\r\n            ng-click=\"$ctrl.hasFocus=false; $ctrl.chooseContact({contact:contact});\">\r\n            <span class=\"name\">\r\n                <a ng-bind-html=\"contact.fullName\" href=\"javascript:void(0)\"\r\n                   ng-focus=\"$ctrl.hasFocus=true;\" ng-blur=\"$ctrl.hasFocus=false;\"></a>\r\n                </span>\r\n            <span class=\"mail_address\" ng-bind-html=\"contact.email\"></span>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AutocomleteController = function () {
	    function AutocomleteController(BaseService) {
	        var _this = this;

	        _classCallCheck(this, AutocomleteController);

	        BaseService.getData("users").then(function (responce) {
	            _this.contacts = _this.contactsFull = responce;
	            _this.filterContacts();
	        });
	        this.contactsCash = {};
	    }

	    _createClass(AutocomleteController, [{
	        key: "filterContacts",
	        value: function filterContacts() {
	            if (this.contactsFull) {
	                var contactsFromCash = this.contactsCash[this.term];
	                if (contactsFromCash) {
	                    this.contacts = contactsFromCash;
	                } else {
	                    this.contacts = [];
	                    for (var i = 0; i < this.contactsFull.length; i++) {
	                        var currentContact = this.contactsFull[i];
	                        this.selectContact(currentContact, "fullName") || this.selectContact(currentContact, "email");
	                    }

	                    this.contactsCash[this.term] = this.contacts;

	                    if (this.contacts.length == 0) this.isVisible = false;
	                }
	            }
	        }
	    }, {
	        key: "selectContact",
	        value: function selectContact(contact, field) {
	            var updatedField = this.selectTerm(contact[field]);
	            if (contact[field] != updatedField) {
	                var selectedContact = angular.copy(contact);
	                selectedContact.realEmail = selectedContact.email;
	                selectedContact[field] = updatedField;
	                this.contacts.push(selectedContact);
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: "selectTerm",
	        value: function selectTerm(str) {
	            var re = new RegExp(this.term, "i");
	            return str.replace(re, function (str) {
	                return "<b>" + str + "</b>";
	            });
	        }
	    }, {
	        key: "term",
	        get: function get() {
	            return this._term;
	        },
	        set: function set(value) {
	            this._term = value;
	            this.filterContacts();
	        }
	    }]);

	    return AutocomleteController;
	}();

		exports.default = AutocomleteController;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<mail-page></mail-page>"

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<mail-list folder-name='$ctrl.folderName'></mail-list>"

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<mail-view mail-id='$ctrl.mailId'></mail-view>"

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var mailListStateController = function mailListStateController($stateParams) {
	    this.folderName = $stateParams.folderName;
	    //MailService.selectedFolder = this.folderName;
	};

		exports.default = mailListStateController;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var mailViewStateController = function mailViewStateController($stateParams) {
	    this.mailId = $stateParams.mailId;
	};

		exports.default = mailViewStateController;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var onExitMailViewState = function onExitMailViewState(MailService) {
	    MailService.selectedMail = null;
	};

		exports.default = onExitMailViewState;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _baseService = __webpack_require__(9);

	var _baseService2 = _interopRequireDefault(_baseService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MailService = function (_BaseService) {
	    _inherits(MailService, _BaseService);

	    function MailService($http, UtilsService) {
	        _classCallCheck(this, MailService);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MailService).call(this, $http, UtilsService));

	        _this.selectedFolder = null;
	        _this.selectedMail = null;
	        return _this;
	    }

	    _createClass(MailService, [{
	        key: "getFolders",
	        value: function getFolders() {
	            return this.getData("folders");
	        }
	    }, {
	        key: "getMails",
	        value: function getMails(folderName) {
	            return this.getData(folderName.toLowerCase());
	        }
	    }, {
	        key: "getSelectedItem",
	        value: function getSelectedItem(folderName, mailId) {
	            return _get(Object.getPrototypeOf(MailService.prototype), "getSelectedItem", this).call(this, folderName, mailId).then(function (response) {
	                response.data.id = mailId;
	                response.data.folder = folderName;
	                return response.data;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "sendMail",
	        value: function sendMail(mail) {
	            return this.add(mail, "sent");
	        }
	    }, {
	        key: "selectedMail",
	        get: function get() {
	            return this.selectedItem;
	        },
	        set: function set(mail) {
	            this.selectedItem = mail;
	        }
	    }]);

	    return MailService;
	}(_baseService2.default);

		exports.default = MailService;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(3);

	__webpack_require__(8);

	var _contactPageComponent = __webpack_require__(34);

	var _contactPageComponent2 = _interopRequireDefault(_contactPageComponent);

	var _contactListComponent = __webpack_require__(36);

	var _contactListComponent2 = _interopRequireDefault(_contactListComponent);

	var _contactViewComponent = __webpack_require__(39);

	var _contactViewComponent2 = _interopRequireDefault(_contactViewComponent);

	var _changeDateFormatDirective = __webpack_require__(42);

	var _changeDateFormatDirective2 = _interopRequireDefault(_changeDateFormatDirective);

	var _contactsState = __webpack_require__(43);

	var _contactsState2 = _interopRequireDefault(_contactsState);

	var _contactViewState = __webpack_require__(44);

	var _contactViewState2 = _interopRequireDefault(_contactViewState);

	var _contactViewStateController = __webpack_require__(45);

	var _contactViewStateController2 = _interopRequireDefault(_contactViewStateController);

	var _contactService = __webpack_require__(46);

	var _contactService2 = _interopRequireDefault(_contactService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contacts = angular.module("contacts", ["common", "services", "ngMessages", "ui.router", "ngSanitize"]);

	contacts.config(function ($stateProvider) {
	    $stateProvider.state("contacts", {
	        url: "/contacts",
	        template: _contactsState2.default
	    }).state("contactView", {
	        parent: "contacts",
	        url: "/contact?contactId",
	        template: _contactViewState2.default,
	        controller: "contactViewStateController as $ctrl"
	    }).state("newContact", {
	        parent: "contacts",
	        url: "/newContact",
	        template: _contactViewState2.default
	    });
	});

	contacts.component("contactPage", _contactPageComponent2.default);
	contacts.component("contactList", _contactListComponent2.default);
	contacts.component("contactView", _contactViewComponent2.default);
	contacts.directive("changeDateFormat", _changeDateFormatDirective2.default);
	contacts.controller("contactViewStateController", _contactViewStateController2.default);
	contacts.service("ContactService", _contactService2.default);

	exports.default = contacts;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _contactPage = __webpack_require__(35);

	var _contactPage2 = _interopRequireDefault(_contactPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contactPage = {
	    template: _contactPage2.default,
	    controller: function controller(ContactService) {
	        this.isContactSelected = function () {
	            return ContactService.selectedContact !== null;
	        };
	    }
	};

		exports.default = contactPage;

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"right_col\">\r\n    <contact-list ng-if=\"!$ctrl.isContactSelected()\"></contact-list>\r\n    <ui-view></ui-view>\r\n</div>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _contactList = __webpack_require__(37);

	var _contactList2 = _interopRequireDefault(_contactList);

	var _contactListController = __webpack_require__(38);

	var _contactListController2 = _interopRequireDefault(_contactListController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contactList = {
	    template: _contactList2.default,
	    controller: _contactListController2.default
	};

		exports.default = contactList;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact_list\">\r\n    <div class=\"buttons\">\r\n        <custom-button class=\"'add'\" name=\"'Add'\"  click-handler=\"$ctrl.add()\"\r\n                       sref=\"'newContact'\"></custom-button>\r\n        <custom-button class=\"'del'\" name=\"'Delete'\" click-handler=\"$ctrl.remove()\"></custom-button>\r\n    </div>\r\n    <ul>\r\n        <li ng-repeat=\"contact in $ctrl.contacts\">\r\n            <input type=\"checkbox\" ng-model=\"contact.checked\"/>\r\n\r\n            <div class=\"row\" ui-sref=\"contactView({contactId: contact.id})\"\r\n                 ng-click=\"$ctrl.setSelectedContact(contact)\">\r\n                <div class=\"name\">{{contact.fullName}}</div>\r\n                <div class=\"mail_address\"><a href=\"mailto:{{contact.email}}\">{{contact.email}}</a></div>\r\n                <div class=\"birthdate\">{{contact.birthdate | date: 'dd/MM/yyyy'}}</div>\r\n                <div class=\"address\">{{contact.address}}</div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listController = __webpack_require__(18);

	var _listController2 = _interopRequireDefault(_listController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactListController = function (_ListController) {
	    _inherits(ContactListController, _ListController);

	    function ContactListController(ContactService) {
	        _classCallCheck(this, ContactListController);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactListController).call(this, ContactService));
	    }

	    _createClass(ContactListController, [{
	        key: "loadContacts",
	        value: function loadContacts() {
	            var _this2 = this;

	            this.service.getData().then(function (contacts) {
	                _this2.contacts = contacts;
	            });
	        }
	    }, {
	        key: "loadItems",
	        value: function loadItems() {
	            return this.loadContacts();
	        }
	    }, {
	        key: "setSelectedContact",
	        value: function setSelectedContact(contact) {
	            this.setSelectedItem(contact);
	        }
	    }, {
	        key: "contacts",
	        get: function get() {
	            return this.items;
	        },
	        set: function set(items) {
	            this.items = items;
	        }
	    }]);

	    return ContactListController;
	}(_listController2.default);

		exports.default = ContactListController;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _contactView = __webpack_require__(40);

	var _contactView2 = _interopRequireDefault(_contactView);

	var _contactViewController = __webpack_require__(41);

	var _contactViewController2 = _interopRequireDefault(_contactViewController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contactView = {
	    bindings: {
	        contactId: "<"
	    },
	    template: _contactView2.default,
	    controller: _contactViewController2.default
	};

		exports.default = contactView;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact_view\">\r\n    <form name=\"contactForm\" novalidate>\r\n        <div class=\"buttons\">\r\n            <custom-button class=\"$ctrl.isNew ? 'single': 'edit'\"\r\n                           name=\"$ctrl.editMode ? 'Save' : 'Edit'\"\r\n                           disabled=\"contactForm.$invalid\"\r\n                           click-handler=\"$ctrl.editMode ? $ctrl.save() : $ctrl.edit()\"></custom-button>\r\n            <custom-button class=\"'del'\" name=\"'Delete'\" ng-if=\"!$ctrl.isNew\"\r\n                           click-handler=\"$ctrl.remove()\"></custom-button>\r\n        </div>\r\n        <div class=\"name_row\">\r\n            <span class=\"name_text\" ng-if=\"!$ctrl.editMode\">{{$ctrl.contact.fullName}}</span>\r\n            <input name=\"name\" ng-if=\"$ctrl.editMode\" ng-model=\"$ctrl.contact.fullName\" required ng-minlength=\"5\">\r\n            <messages element=\"contactForm.name\" errors=\"$ctrl.nameFieldErrors\" visibility=\"contactForm.name.$dirty\"></messages>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"label_wrapper\"><label>Mail address</label></div>\r\n            <div class=\"mail_address\">\r\n                <a ng-if=\"!$ctrl.editMode\" href=\"mailto:{{$ctrl.contact.email}}\">{{$ctrl.contact.email}}</a>\r\n                <input name=\"email\" ng-if=\"$ctrl.editMode\" ng-model=\"$ctrl.contact.email\" type=\"email\" required>\r\n                <messages element=\"contactForm.email\" errors=\"$ctrl.mailFieldErrors\" visibility=\"contactForm.email.$dirty\"></messages>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"label_wrapper\"><label>Birthdate</label></div>\r\n            <div class=\"birthdate\">\r\n                <span ng-if=\"!$ctrl.editMode\">{{$ctrl.contact.birthdate | date: 'dd/MM/yyyy'}}</span>\r\n                <input ng-if=\"$ctrl.editMode\" change-date-format type=\"date\" ng-model=\"$ctrl.contact.birthdate\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"label_wrapper\"><label>Address</label></div>\r\n            <div class=\"address\">\r\n                <span ng-if=\"!$ctrl.editMode\">{{$ctrl.contact.address}}</span>\r\n                <input ng-if=\"$ctrl.editMode\" ng-model=\"$ctrl.contact.address\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _viewController = __webpack_require__(22);

	var _viewController2 = _interopRequireDefault(_viewController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactViewController = function (_ViewController) {
	    _inherits(ContactViewController, _ViewController);

	    function ContactViewController(ContactService, $state) {
	        _classCallCheck(this, ContactViewController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContactViewController).call(this, ContactService, $state));

	        if (_this.service.selectedItem === null) {

	            _this.getSelectedItem("users", _this.contactId);
	        } else {
	            _this.contact = _this.service.selectedItem;
	        }

	        _this.editMode = _this.isNew ? true : false;

	        _this.mailFieldErrors = [{ type: "required", text: "Please enter a value for this field" }, { type: "email", text: "Enter a valid e-mail" }];

	        _this.nameFieldErrors = [{ type: "required", text: "Please enter a value for this field" }, { type: "minlength", text: "This field can be at least 5 characters long" }];
	        return _this;
	    }

	    _createClass(ContactViewController, [{
	        key: "edit",
	        value: function edit() {
	            this.editMode = true;
	        }
	    }, {
	        key: "save",
	        value: function save() {
	            var _this2 = this;

	            if (this.isNew) {
	                this.service.add(this.contact).then(function (response) {
	                    _this2.editMode = false;
	                    _this2.state.go("contactView", { contactId: _this2.contact.id });
	                });
	            } else {
	                this.service.update(this.contact).then(function (response) {
	                    _this2.editMode = false;
	                });
	            }
	        }
	    }, {
	        key: "goToListState",
	        value: function goToListState() {
	            this.state.go("contacts", { reload: 'contacts' });
	        }
	    }, {
	        key: "contact",
	        get: function get() {
	            return this.item;
	        },
	        set: function set(item) {
	            this.item = item;
	        }
	    }, {
	        key: "isNew",
	        get: function get() {
	            return this.contactId === undefined;
	        }
	    }]);

	    return ContactViewController;
	}(_viewController2.default);

		exports.default = ContactViewController;

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var changeDateFormat = function changeDateFormat() {
	    return {
	        restrict: 'A',
	        require: 'ngModel',
	        link: function link(scope, element, attrs, ngModel) {

	            //model -> view
	            ngModel.$formatters.push(function (modelValue) {
	                return new Date(modelValue);
	            });

	            //view -> model
	            ngModel.$parsers.push(function (viewValue) {
	                return viewValue ? viewValue.getTime() : viewValue;
	            });
	        }
	    };
	};

		exports.default = changeDateFormat;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<contact-page></contact-page>"

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<contact-view contact-id='$ctrl.contactId'></contact-view>"

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var contactViewStateController = function contactViewStateController($stateParams) {
	    this.contactId = $stateParams.contactId;
	};

		exports.default = contactViewStateController;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _baseService = __webpack_require__(9);

	var _baseService2 = _interopRequireDefault(_baseService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactService = function (_BaseService) {
	    _inherits(ContactService, _BaseService);

	    function ContactService($http, UtilsService) {
	        _classCallCheck(this, ContactService);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContactService).call(this, $http, UtilsService));

	        _this.selectedContact = null;
	        _this.dataName = "users";
	        return _this;
	    }

	    _createClass(ContactService, [{
	        key: "getSelectedItem",
	        value: function getSelectedItem(folderName, contactId) {
	            return _get(Object.getPrototypeOf(ContactService.prototype), "getSelectedItem", this).call(this, folderName, contactId).then(function (response) {
	                response.data.id = contactId;
	                return response.data;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "selectedContact",
	        get: function get() {
	            return this.selectedItem;
	        },
	        set: function set(contact) {
	            this.selectedItem = contact;
	        }
	    }]);

	    return ContactService;
	}(_baseService2.default);

		exports.default = ContactService;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mainPage = __webpack_require__(48);

	var _mainPage2 = _interopRequireDefault(_mainPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mainPage = {
	    template: _mainPage2.default,
	    controller: function controller() {
	        this.pageList = [{
	            title: "Mails",
	            state: "mail"
	        }, {
	            title: "Contacts",
	            state: "contacts"
	        }];
	    }
	};

		exports.default = mainPage;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<header>\r\n    <div class=\"container\">\r\n        <h1>MailApp</h1>\r\n        <top-nav nav-list=\"$ctrl.pageList\"></top-nav>\r\n    </div>\r\n</header>\r\n<main>\r\n    <div class=\"container\">\r\n        <ui-view></ui-view>\r\n    </div>\r\n</main>\r\n<footer></footer>"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _topNav = __webpack_require__(50);

	var _topNav2 = _interopRequireDefault(_topNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var topNav = {
	    bindings: {
	        navList: "<"
	    },
	    template: _topNav2.default,
	    controller: function controller(ContactService, MailService) {
	        this.reset = function () {
	            ContactService.selectedContact = null;
	            MailService.selectedMail = null;
	        };
	    }
	};

		exports.default = topNav;

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"top_nav\">\r\n  <ul>\r\n    <!--<top-nav-item nav-item=\"navItem\"\r\n                  ng-repeat=\"navItem in $ctrl.navList\"></top-nav-item>-->\r\n    <li ng-repeat=\"navItem in $ctrl.navList\">\r\n      <a ui-sref=\"{{navItem.state}}\"\r\n         ui-sref-active=\"active\"\r\n         ng-click=\"$ctrl.reset()\">\r\n        {{navItem.title}}</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbC1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmNjZDQxMGQ5NjhmMzFjYzkwODAiLCJ3ZWJwYWNrOi8vL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy9tYWluL2luZGV4LmpzIiwid2VicGFjazovLy9tYWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovLy9zaGFyZWQvY3VzdG9tQnV0dG9uQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC92aWV3cy9jdXN0b20tYnV0dG9uLmh0bWwiLCJ3ZWJwYWNrOi8vL3NoYXJlZC9tZXNzYWdlc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdmlld3MvbWVzc2FnZXMuaHRtbCIsIndlYnBhY2s6Ly8vc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NlcnZpY2VzL2Jhc2VTZXJ2aWNlLmpzIiwid2VicGFjazovLy9zZXJ2aWNlcy91dGlsc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL21haWxzL2ZvbGRlcnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbHMvdmlld3MvZm9sZGVyLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vbWFpbHMvbWFpbFBhZ2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbHMvdmlld3MvbWFpbC1wYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vL21haWxzL21haWxMaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL21haWxzL3ZpZXdzL21haWwtbGlzdC5odG1sIiwid2VicGFjazovLy9tYWlscy9tYWlsTGlzdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL2NvbnRyb2xsZXJzL2xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9tYWlscy9tYWlsVmlld0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9tYWlscy92aWV3cy9tYWlsLXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vbWFpbHMvbWFpbFZpZXdDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9jb250cm9sbGVycy92aWV3Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vbWFpbHMvYXV0b2NvbXBsZXRlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL21haWxzL3ZpZXdzL2F1dG9jb21wbGV0ZS5odG1sIiwid2VicGFjazovLy9tYWlscy9hdXRvY29tcGxldGVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL21haWxzL3ZpZXdzL21haWwtc3RhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9tYWlscy92aWV3cy9tYWlsLWxpc3Qtc3RhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9tYWlscy92aWV3cy9tYWlsLXZpZXctc3RhdGUuaHRtbCIsIndlYnBhY2s6Ly8vbWFpbHMvbWFpbExpc3RTdGF0ZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL21haWxzL21haWxWaWV3U3RhdGVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9tYWlscy9vbkV4aXRNYWlsVmlld1N0YXRlLmpzIiwid2VicGFjazovLy9tYWlscy9tYWlsU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vY29udGFjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2NvbnRhY3RzL2NvbnRhY3RQYWdlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbnRhY3RzL3ZpZXdzL2NvbnRhY3QtcGFnZS5odG1sIiwid2VicGFjazovLy9jb250YWN0cy9jb250YWN0TGlzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWN0cy92aWV3cy9jb250YWN0LWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vY29udGFjdHMvY29udGFjdExpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9jb250YWN0cy9jb250YWN0Vmlld0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWN0cy92aWV3cy9jb250YWN0LXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vY29udGFjdHMvY29udGFjdFZpZXdDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9jb250YWN0cy9jaGFuZ2VEYXRlRm9ybWF0RGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2NvbnRhY3RzL3ZpZXdzL2NvbnRhY3RzLXN0YXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29udGFjdHMvdmlld3MvY29udGFjdC12aWV3LXN0YXRlLmh0bWwiLCJ3ZWJwYWNrOi8vL2NvbnRhY3RzL2NvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9jb250YWN0cy9jb250YWN0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vbWFpbi9tYWluUGFnZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9tYWluL3ZpZXdzL21haW4tcGFnZS5odG1sIiwid2VicGFjazovLy9tYWluL3RvcE5hdkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9tYWluL3ZpZXdzL3RvcC1uYXYuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZjY2Q0MTBkOTY4ZjMxY2M5MDgwXG4gKiovIiwiaW1wb3J0ICBcIi4uL21haW5cIjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzY3JpcHRzL2FwcC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWFpbHNcIjtcclxuaW1wb3J0IFwiLi4vY29udGFjdHNcIjtcclxuaW1wb3J0IFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IG1haW5QYWdlQ29tb25lbnQgZnJvbSBcIi4vbWFpblBhZ2VDb21wb25lbnRcIjtcclxuaW1wb3J0IHRvcE5hdkNvbXBvbmVudCBmcm9tIFwiLi90b3BOYXZDb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IG1haWxBcHAgPSBhbmd1bGFyLm1vZHVsZShcIm1haWxBcHBcIiwgW1wibWFpbHNcIiwgXCJjb250YWN0c1wiLCBcInNlcnZpY2VzXCJdKTtcclxuXHJcbm1haWxBcHAuY29tcG9uZW50KFwibWFpblBhZ2VcIiwgbWFpblBhZ2VDb21vbmVudCk7XHJcbm1haWxBcHAuY29tcG9uZW50KFwidG9wTmF2XCIsIHRvcE5hdkNvbXBvbmVudCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsQXBwO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haW4vaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBcIi4uL3NoYXJlZFwiO1xyXG5pbXBvcnQgXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgZm9sZGVyc0NvbXBvbmVudCBmcm9tIFwiLi9mb2xkZXJzQ29tcG9uZW50XCI7XHJcbmltcG9ydCBtYWlsUGFnZUNvbXBvbmVudCBmcm9tIFwiLi9tYWlsUGFnZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgbWFpbExpc3RDb21wb25lbnQgZnJvbSBcIi4vbWFpbExpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IG1haWxWaWV3Q29tcG9uZW50IGZyb20gXCIuL21haWxWaWV3Q29tcG9uZW50XCI7XHJcbmltcG9ydCBhdXRvY29tcGxldGVDb21wb25lbnQgZnJvbSBcIi4vYXV0b2NvbXBsZXRlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBtYWlsU3RhdGVUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9tYWlsLXN0YXRlLmh0bWxcIjtcclxuaW1wb3J0IG1haWxMaXN0U3RhdGVUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9tYWlsLWxpc3Qtc3RhdGUuaHRtbFwiO1xyXG5pbXBvcnQgbWFpbFZpZXdTdGF0ZVRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL21haWwtdmlldy1zdGF0ZS5odG1sXCI7XHJcbmltcG9ydCBtYWlsTGlzdFN0YXRlQ29udHJvbGxlciBmcm9tIFwiLi9tYWlsTGlzdFN0YXRlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgbWFpbFZpZXdTdGF0ZUNvbnRyb2xsZXIgZnJvbSBcIi4vbWFpbFZpZXdTdGF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IG9uRXhpdE1haWxWaWV3U3RhdGUgZnJvbSBcIi4vb25FeGl0TWFpbFZpZXdTdGF0ZVwiO1xyXG5pbXBvcnQgTWFpbFNlcnZpY2UgZnJvbSBcIi4vbWFpbFNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IG1haWxzID0gYW5ndWxhci5tb2R1bGUoXCJtYWlsc1wiLCBbXCJjb21tb25cIiwgXCJzZXJ2aWNlc1wiLCBcIm5nTWVzc2FnZXNcIiwgXCJ1aS5yb3V0ZXJcIl0pO1xyXG5cclxubWFpbHMuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXJcclxuICAgICAgICAud2hlbihcIi9tYWlsXCIsIFsnJHN0YXRlJywgZnVuY3Rpb24gKCRzdGF0ZSkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oXCJtYWlsTGlzdFwiLCB7Zm9sZGVyTmFtZTogJ0luYm94J30pO1xyXG4gICAgICAgIH1dKVxyXG4gICAgICAgIC5vdGhlcndpc2UoXCJtYWlsXCIpO1xyXG5cclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKFwibWFpbFwiLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWFpbFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbWFpbFN0YXRlVGVtcGxhdGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZShcIm1haWxMaXN0XCIsIHtcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haWxcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9mb2xkZXI/Zm9sZGVyTmFtZVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbWFpbExpc3RTdGF0ZVRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcIm1haWxMaXN0U3RhdGVDb250cm9sbGVyXCIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogXCIkY3RybFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoXCJtYWlsVmlld1wiLCB7XHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWlsTGlzdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL21haWw/bWFpbElkXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtYWlsVmlld1N0YXRlVGVtcGxhdGUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwibWFpbFZpZXdTdGF0ZUNvbnRyb2xsZXIgYXMgJGN0cmxcIixcclxuICAgICAgICAgICAgb25FeGl0OiBvbkV4aXRNYWlsVmlld1N0YXRlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoXCJuZXdNYWlsXCIsIHtcclxuICAgICAgICAgICAgcGFyZW50OiBcIm1haWxcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9uZXdNYWlsXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtYWlsVmlld1N0YXRlVGVtcGxhdGVcclxuICAgICAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxubWFpbHMuY29tcG9uZW50KFwiZm9sZGVyc1wiLCBmb2xkZXJzQ29tcG9uZW50KTtcclxubWFpbHMuY29tcG9uZW50KFwibWFpbFBhZ2VcIiwgbWFpbFBhZ2VDb21wb25lbnQpO1xyXG5tYWlscy5jb21wb25lbnQoXCJtYWlsTGlzdFwiLCBtYWlsTGlzdENvbXBvbmVudCk7XHJcbm1haWxzLmNvbXBvbmVudChcIm1haWxWaWV3XCIsIG1haWxWaWV3Q29tcG9uZW50KTtcclxubWFpbHMuY29tcG9uZW50KFwiYXV0b2NvbXBsZXRlXCIsIGF1dG9jb21wbGV0ZUNvbXBvbmVudCk7XHJcbm1haWxzLmNvbnRyb2xsZXIoXCJtYWlsTGlzdFN0YXRlQ29udHJvbGxlclwiLCBtYWlsTGlzdFN0YXRlQ29udHJvbGxlcik7XHJcbm1haWxzLmNvbnRyb2xsZXIoXCJtYWlsVmlld1N0YXRlQ29udHJvbGxlclwiLCBtYWlsVmlld1N0YXRlQ29udHJvbGxlcik7XHJcbm1haWxzLnNlcnZpY2UoXCJNYWlsU2VydmljZVwiLCBNYWlsU2VydmljZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlscztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbHMvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBjdXN0b21CdXR0b25Db21wb25lbnQgZnJvbSBcIi4vY3VzdG9tQnV0dG9uQ29tcG9uZW50XCI7XHJcbmltcG9ydCBtZXNzYWdlc0NvbXBvbmVudCBmcm9tIFwiLi9tZXNzYWdlc0NvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgY29tbW9uID0gYW5ndWxhci5tb2R1bGUoXCJjb21tb25cIiwgW10pO1xyXG5cclxuY29tbW9uLmNvbXBvbmVudChcImN1c3RvbUJ1dHRvblwiLCBjdXN0b21CdXR0b25Db21wb25lbnQpO1xyXG5jb21tb24uY29tcG9uZW50KFwibWVzc2FnZXNcIiwgbWVzc2FnZXNDb21wb25lbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNoYXJlZC9pbmRleC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGN1c3RvbUJ1dHRvblRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL2N1c3RvbS1idXR0b24uaHRtbFwiO1xyXG5cclxuY29uc3QgY3VzdG9tQnV0dG9uID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYW1lOiBcIjxcIixcclxuICAgICAgICBjbGFzczogXCI8XCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IFwiPFwiLFxyXG4gICAgICAgIHNyZWY6IFwiPFwiLFxyXG4gICAgICAgIGNsaWNrSGFuZGxlcjogXCImXCJcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogY3VzdG9tQnV0dG9uVGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXN0b21CdXR0b247XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNoYXJlZC9jdXN0b21CdXR0b25Db21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLVRPRE86IGNyZWF0ZSBidXR0b25zLWNvbnRhaW5lci0tPlxcclxcbjxkaXYgbmctY2xhc3M9XFxcIlsnYnV0dG9uJywgJGN0cmwuY2xhc3MsIHtkaXNhYmxlZCA6ICRjdHJsLmRpc2FibGVkfV1cXFwiPlxcclxcbiAgICA8YSBuZy1pZj1cXFwiJGN0cmwuc3JlZlxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuY2xpY2tIYW5kbGVyKClcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKVxcXCIgdWktc3JlZj1cXFwie3skY3RybC5zcmVmfX1cXFwiPnt7JGN0cmwubmFtZX19PC9hPlxcclxcbiAgICA8YSBuZy1pZj1cXFwiISRjdHJsLnNyZWZcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmNsaWNrSGFuZGxlcigpXFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMClcXFwiPnt7JGN0cmwubmFtZX19PC9hPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NoYXJlZC92aWV3cy9jdXN0b20tYnV0dG9uLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBtZXNzYWdlc1RlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL21lc3NhZ2VzLmh0bWxcIjtcclxuXHJcbmNvbnN0IG1lc3NhZ2VzID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBlbGVtZW50OiBcIjxcIixcclxuICAgICAgICBlcnJvcnM6IFwiPFwiLFxyXG4gICAgICAgIHZpc2liaWxpdHk6IFwiPFwiXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IG1lc3NhZ2VzVGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzaGFyZWQvbWVzc2FnZXNDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZXJyb3JfbXNnXFxcIiBuZy1tZXNzYWdlcz1cXFwiJGN0cmwuZWxlbWVudC4kZXJyb3JcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBuZy1pZj1cXFwiJGN0cmwudmlzaWJpbGl0eVxcXCI+XFxyXFxuICAgIDxzcGFuIG5nLXJlcGVhdD1cXFwiZXJyIGluICRjdHJsLmVycm9yc1xcXCIgbmctbWVzc2FnZS1leHA9XFxcImVyci50eXBlXFxcIiBjbGFzcz1cXFwibXNnXFxcIiA+e3tlcnIudGV4dH19PC9zcGFuPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NoYXJlZC92aWV3cy9tZXNzYWdlcy5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQmFzZVNlcnZpY2UgZnJvbSBcIi4vYmFzZVNlcnZpY2VcIjtcclxuaW1wb3J0IFV0aWxzU2VydmljZSBmcm9tIFwiLi91dGlsc1NlcnZpY2VcIjtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gYW5ndWxhci5tb2R1bGUoXCJzZXJ2aWNlc1wiLCBbXSk7XHJcblxyXG5zZXJ2aWNlcy5zZXJ2aWNlKFwiQmFzZVNlcnZpY2VcIiwgQmFzZVNlcnZpY2UpO1xyXG5zZXJ2aWNlcy5zZXJ2aWNlKFwiVXRpbHNTZXJ2aWNlXCIsIFV0aWxzU2VydmljZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlcztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc2VydmljZXMvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIEJhc2VTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBVdGlsc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLnV0aWxzU2VydmljZSA9IFV0aWxzU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKGRhdGFOYW1lID0gdGhpcy5kYXRhTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXRpbHNTZXJ2aWNlLmJhc2VVUkx9JHtkYXRhTmFtZX0uanNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHRoaXMudXRpbHNTZXJ2aWNlLm5vcm1hbGl6ZVRvQXJyYXkocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRJdGVtKGZvbGRlck5hbWUsIGl0ZW1JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXRpbHNTZXJ2aWNlLmJhc2VVUkx9JHtmb2xkZXJOYW1lLnRvTG93ZXJDYXNlKCl9LyR7aXRlbUlkfS5qc29uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5ld0l0ZW0sIGRhdGFOYW1lID0gdGhpcy5kYXRhTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnV0aWxzU2VydmljZS5iYXNlVVJMfSR7ZGF0YU5hbWV9Lmpzb25gLCBuZXdJdGVtKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmlkID0gcmVzcG9uc2UuZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdJdGVtO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoaXRlbSwgZGF0YU5hbWUgPSB0aGlzLmRhdGFOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy51dGlsc1NlcnZpY2UuYmFzZVVSTH0ke2RhdGFOYW1lfS8ke2l0ZW0uaWR9Lmpzb25gLCBpdGVtKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKS5cclxuICAgICAgICAgICAgY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShpdGVtLCBkYXRhTmFtZSA9IHRoaXMuZGF0YU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnV0aWxzU2VydmljZS5iYXNlVVJMfSR7ZGF0YU5hbWV9LyR7aXRlbS5pZH0uanNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQXJyYXkoYXJyLCBkYXRhTmFtZSA9IHRoaXMuZGF0YU5hbWUpIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgICAgICBsZXQgcmVtb3ZlTmV4dEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShhcnJbaV0sIGRhdGFOYW1lKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgrK2kgPCBsZW5ndGgpID8gcmVtb3ZlTmV4dEl0ZW0oKSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZW1vdmVOZXh0SXRlbSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzZXJ2aWNlcy9iYXNlU2VydmljZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgVXRpbHNTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5ub3JtYWxpemVUb0FycmF5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0KSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkT2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRPYmplY3QuaWQgPSBrZXk7XHJcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVkT2JqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vZmllcnktaW5mZXJuby04OTY4LmZpcmViYXNlaW8uY29tL1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHNTZXJ2aWNlO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc2VydmljZXMvdXRpbHNTZXJ2aWNlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZm9sZGVyc1RlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL2ZvbGRlci1saXN0Lmh0bWxcIjtcclxuXHJcbmNvbnN0IGZvbGRlcnMgPSB7XHJcbiAgICB0ZW1wbGF0ZTogZm9sZGVyc1RlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gKE1haWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5nZXRGb2xkZXJzID0gKCk9PiB7XHJcbiAgICAgICAgICAgIE1haWxTZXJ2aWNlLmdldEZvbGRlcnMoKS50aGVuKChmb2xkZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRlcnMgPSBmb2xkZXJzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFNYWlsU2VydmljZS5zZWxlY3RlZEZvbGRlcikgTWFpbFNlcnZpY2Uuc2VsZWN0ZWRGb2xkZXIgPSB0aGlzLmZvbGRlcnNbMF0ubmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldEZvbGRlcnMoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvbGRlcnM7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWlscy9mb2xkZXJzQ29tcG9uZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx1bD5cXHJcXG4gICAgPGxpIG5nLXJlcGVhdD1cXFwiZm9sZGVyIGluICRjdHJsLmZvbGRlcnNcXFwiPlxcclxcbiAgICAgICAgPGEgdWktc3JlZj1cXFwibWFpbExpc3Qoe2ZvbGRlck5hbWU6Zm9sZGVyLm5hbWV9KVxcXCJcXHJcXG4gICAgICAgICAgIHVpLXNyZWYtYWN0aXZlPVxcXCJhY3RpdmVcXFwiXFxyXFxuICAgICAgICAgICBuZy1jbGFzcz1cXFwiWydmb2xkZXInLCBmb2xkZXIubmFtZS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsIDMpXVxcXCI+XFxyXFxuICAgICAgICAgICAge3tmb2xkZXIubmFtZX19XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlscy92aWV3cy9mb2xkZXItbGlzdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IG1haWxQYWdlVGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvbWFpbC1wYWdlLmh0bWxcIjtcclxuXHJcbmNvbnN0IG1haWxQYWdlID0ge1xyXG4gICAgdGVtcGxhdGU6IG1haWxQYWdlVGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoTWFpbFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlzTWFpbFNlbGVjdGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTWFpbFNlcnZpY2Uuc2VsZWN0ZWRNYWlsICE9PSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsUGFnZTtcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL21haWxQYWdlQ29tcG9uZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImxlZnRfY29sXFxcIj5cXHJcXG4gICAgPG5hdiBjbGFzcz1cXFwibWFpbF9tZW51XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxjdXN0b20tYnV0dG9uIGNsYXNzPVxcXCInbm1lcydcXFwiIG5hbWU9XFxcIidOZXcgbWVzc2FnZSdcXFwiIHNyZWY9XFxcIiduZXdNYWlsJ1xcXCI+PC9jdXN0b20tYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8Zm9sZGVycz48L2ZvbGRlcnM+XFxyXFxuICAgIDwvbmF2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJpZ2h0X2NvbFxcXCI+XFxyXFxuICAgIDx1aS12aWV3PjwvdWktdmlldz5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlscy92aWV3cy9tYWlsLXBhZ2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBtYWlsTGlzdFRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL21haWwtbGlzdC5odG1sXCI7XHJcbmltcG9ydCBNYWlsTGlzdENvbnRyb2xsZXIgZnJvbSBcIi4vbWFpbExpc3RDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBtYWlsTGlzdCA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgZm9sZGVyTmFtZTogXCI8XCJcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogbWFpbExpc3RUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IE1haWxMaXN0Q29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbExpc3Q7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWlscy9tYWlsTGlzdENvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtYWlsX2xpc3RcXFwiIG5nLWlmPVxcXCIhJGN0cmwuaXNNYWlsU2VsZWN0ZWQoKVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgPGN1c3RvbS1idXR0b24gY2xhc3M9XFxcIidkZWwnXFxcIiBuYW1lPVxcXCInRGVsZXRlJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrLWhhbmRsZXI9XFxcIiRjdHJsLnJlbW92ZSgkY3RybC5mb2xkZXJOYW1lLnRvTG93ZXJDYXNlKCkpXFxcIj48L2N1c3RvbS1idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJtYWlsIGluICRjdHJsLm1haWxzIHwgb3JkZXJCeTogJy1kYXRlJ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibWFpbC5jaGVja2VkXFxcIi8+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiB1aS1zcmVmPVxcXCJtYWlsVmlldyh7bWFpbElkOm1haWwuaWR9KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1haWxfYWRkcmVzc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YT57e21haWwubmFtZSA/IG1haWwubmFtZSA6IG1haWwuZW1haWx9fTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1haWxfY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidG9waWNcXFwiPnt7bWFpbC50b3BpY319PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1haWxfZnJhZ21lbnRcXFwiPnt7bWFpbC5sZXR0ZXJCb2R5fX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGF0ZVxcXCI+e3ttYWlsLmRhdGUgfCBkYXRlOiAnZGQvTU0veXl5eSd9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuPHVpLXZpZXc+PC91aS12aWV3PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWxzL3ZpZXdzL21haWwtbGlzdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IExpc3RDb250cm9sbGVyICBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdENvbnRyb2xsZXJcIjtcclxuXHJcbmNsYXNzIE1haWxMaXN0Q29udHJvbGxlciBleHRlbmRzIExpc3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKE1haWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoTWFpbFNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5zZWxlY3RlZEZvbGRlciA9IHRoaXMuZm9sZGVyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWFpbHMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdldE1haWxzKHRoaXMuZm9sZGVyTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oKG1haWxzKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbHMgPSBtYWlscztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRNYWlscygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtYWlscygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWFpbHMoaXRlbXMpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYWlsU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zZWxlY3RlZEl0ZW0gIT09IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxMaXN0Q29udHJvbGxlcjtcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL21haWxMaXN0Q29udHJvbGxlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgTGlzdENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW0obnVsbCk7XHJcbiAgICAgICAgdGhpcy5sb2FkSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWRJdGVtKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbGVjdGVkSXRlbSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShkYXRhTmFtZSkge1xyXG4gICAgICAgIGxldCBkZWxJdGVtcyA9IFtdO1xyXG4gICAgICAgIGxldCB1cGRhdGVkSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZGVsSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlQXJyYXkoZGVsSXRlbXMsIGRhdGFOYW1lKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlID09PSB0cnVlKSB0aGlzLml0ZW1zID0gdXBkYXRlZEl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlLCBjaG9vc2UgaXRlbXMgdG8gZGVsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRyb2xsZXJzL2xpc3RDb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgbWFpbFZpZXdUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9tYWlsLXZpZXcuaHRtbFwiO1xyXG5pbXBvcnQgTWFpbFZpZXdDb250cm9sbGVyIGZyb20gXCIuL21haWxWaWV3Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgbWFpbFZpZXcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIG1haWxJZDpcIjxcIlxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBtYWlsVmlld1RlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjogTWFpbFZpZXdDb250cm9sbGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsVmlldztcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL21haWxWaWV3Q29tcG9uZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1haWxfdmlld1xcXCI+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgPGN1c3RvbS1idXR0b24gY2xhc3M9XFxcIidzZW5kJ1xcXCIgbmFtZT1cXFwiJ1NlbmQnXFxcIiBuZy1pZj1cXFwiJGN0cmwuaXNOZXdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGljay1oYW5kbGVyPVxcXCIkY3RybC5zZW5kTWFpbCgpXFxcIiBkaXNhYmxlZD1cXFwibmV3TWFpbEZvcm0uJGludmFsaWRcXFwiPjwvY3VzdG9tLWJ1dHRvbj5cXHJcXG4gICAgICAgIDxjdXN0b20tYnV0dG9uIGNsYXNzPVxcXCInZGVsJ1xcXCIgbmFtZT1cXFwiJ0RlbGV0ZSdcXFwiIG5nLWlmPVxcXCIhJGN0cmwuaXNOZXdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGljay1oYW5kbGVyPVxcXCIkY3RybC5yZW1vdmUoJGN0cmwubWFpbC5mb2xkZXIudG9Mb3dlckNhc2UoKSlcXFwiPjwvY3VzdG9tLWJ1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgbmctaWY9XFxcIiEkY3RybC5pc05ld1xcXCIgY2xhc3M9XFxcInJlY2VpdmVkX21zZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcGljXFxcIj57eyRjdHJsLm1haWwudG9waWN9fTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiIG5nLWlmPVxcXCIkY3RybC5tYWlsLm5hbWVcXFwiPnt7JGN0cmwubWFpbC5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbFxcXCI+e3skY3RybC5tYWlsLmVtYWlsfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj57eyRjdHJsLm1haWwuZGF0ZSB8IGRhdGU6ICdkZC9NTS95eXl5J319PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxldHRlcl9ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICB7eyRjdHJsLm1haWwubGV0dGVyQm9keX19XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtIG5hbWU9XFxcIm5ld01haWxGb3JtXFxcIiBub3ZhbGlkYXRlPlxcclxcbiAgICAgICAgPGRpdiBuZy1pZj1cXFwiJGN0cmwuaXNOZXdcXFwiIGNsYXNzPVxcXCJuZXdfbXNnXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ubzo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiZW1haWxcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5tYWlsLmVtYWlsXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cXFwie2FsbG93SW52YWxpZDogdHJ1ZX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBuZy1jaGFuZ2U9XFxcIiRjdHJsLm9uRW1haWxDaGFuZ2UoKVxcXCIgbmctYmx1cj1cXFwiJGN0cmwub25FbWFpbEJsdXIoKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgIDxtZXNzYWdlcyBlbGVtZW50PVxcXCJuZXdNYWlsRm9ybS5lbWFpbFxcXCIgZXJyb3JzPVxcXCIkY3RybC5tYWlsRmllbGRFcnJvcnNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5PVxcXCJuZXdNYWlsRm9ybS5lbWFpbC4kZGlydHlcXFwiPjwvbWVzc2FnZXM+XFxyXFxuICAgICAgICAgICAgICAgIDxhdXRvY29tcGxldGUgdGVybT1cXFwiJGN0cmwubWFpbC5lbWFpbFxcXCIgaGFzLWZvY3VzPVxcXCIkY3RybC5pc0F1dG9jb21wbGV0ZUZvY3VzZWRcXFwiIGlzLXZpc2libGU9XFxcIiRjdHJsLmlzQXV0b2NvbXBsZXRlVmlzaWJsZVxcXCIgY2hvb3NlLWNvbnRhY3Q9XFxcIiRjdHJsLmNob29zZUNvbnRhY3QoY29udGFjdClcXFwiIG5nLWlmPVxcXCIkY3RybC5pc0F1dG9jb21wbGV0ZVZpc2libGVcXFwiPjwvYXV0b2NvbXBsZXRlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcGljXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN1YmplY3Q6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5tYWlsLnRvcGljXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImxldHRlcl9ib2R5XFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwubWFpbC5sZXR0ZXJCb2R5XFxcIj48L3RleHRhcmVhPlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlscy92aWV3cy9tYWlsLXZpZXcuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBWaWV3Q29udHJvbGxlciAgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3ZpZXdDb250cm9sbGVyXCI7XHJcblxyXG5jbGFzcyBNYWlsVmlld0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihNYWlsU2VydmljZSwgJHN0YXRlLCAkdGltZW91dCkge1xyXG4gICAgICAgIHN1cGVyKE1haWxTZXJ2aWNlLCAkc3RhdGUpO1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5zZWxlY3RlZE1haWwgPSB7fTtcclxuICAgICAgICB0aGlzLmdldFNlbGVjdGVkSXRlbSh0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRGb2xkZXIsIHRoaXMubWFpbElkKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaXNBdXRvY29tcGxldGVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0F1dG9jb21wbGV0ZUZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1haWxGaWVsZEVycm9ycyA9IFtcclxuICAgICAgICAgICAge3R5cGU6IFwicmVxdWlyZWRcIiwgdGV4dDogXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBmb3IgdGhpcyBmaWVsZFwifSxcclxuICAgICAgICAgICAge3R5cGU6IFwiZW1haWxcIiwgdGV4dDogXCJFbnRlciBhIHZhbGlkIGUtbWFpbFwifVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1haWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWFpbChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNOZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbElkID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQXV0b2NvbXBsZXRlRm9jdXNlZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0F1dG9jb21wbGV0ZUZvY3VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlzQXV0b2NvbXBsZXRlRm9jdXNlZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2lzQXV0b2NvbXBsZXRlRm9jdXNlZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuaGlkZUF1dG9jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRNYWlsKCkge1xyXG4gICAgICAgIHRoaXMubWFpbC5kYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbmRNYWlsKHRoaXMubWFpbClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXJ2aWNlLnNlbGVjdGVkRm9sZGVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZWxlY3RlZE1haWwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5nbyhcIm1haWxMaXN0XCIsIHtmb2xkZXJOYW1lOiB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRGb2xkZXJ9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvTGlzdFN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZ28oXCJtYWlsTGlzdFwiLCB7Zm9sZGVyTmFtZTogdGhpcy5zZXJ2aWNlLnNlbGVjdGVkRm9sZGVyfSwge3JlbG9hZDogJ21haWxMaXN0J30pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1haWxDaGFuZ2UoKXtcclxuICAgICAgICB0aGlzLmlzQXV0b2NvbXBsZXRlVmlzaWJsZSA9ICEhKHRoaXMubWFpbC5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbWFpbEJsdXIoKXtcclxuICAgICAgICB0aGlzLmhpZGVBdXRvY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQXV0b2NvbXBsZXRlKCl7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzQXV0b2NvbXBsZXRlRm9jdXNlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXV0b2NvbXBsZXRlVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTUwKTtcclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2VDb250YWN0KGNvbnRhY3Qpe1xyXG4gICAgICAgIHRoaXMubWFpbC5lbWFpbCA9IGNvbnRhY3QucmVhbEVtYWlsO1xyXG4gICAgICAgIHRoaXMuaXNBdXRvY29tcGxldGVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxWaWV3Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWlscy9tYWlsVmlld0NvbnRyb2xsZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIFZpZXdDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2UsICRzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICRzdGF0ZTtcclxuICAgICAgICB0aGlzLml0ZW0gPSBzZXJ2aWNlLnNlbGVjdGVkSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoZGF0YU5hbWUpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMuaXRlbSwgZGF0YU5hbWUpLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub0xpc3RTdGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkSXRlbShmb2xkZXJOYW1lLCBpdGVtSWQpIHtcclxuICAgICAgICBpZiAoaXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5nZXRTZWxlY3RlZEl0ZW0oZm9sZGVyTmFtZSwgaXRlbUlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuc2VydmljZS5zZWxlY3RlZEl0ZW0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRyb2xsZXJzL3ZpZXdDb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgYXV0b2NvbXBsZXRlVGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvYXV0b2NvbXBsZXRlLmh0bWxcIjtcclxuaW1wb3J0IEF1dG9jb21wbGV0ZUNvbnRyb2xsZXIgZnJvbSBcIi4vYXV0b2NvbXBsZXRlQ29udHJvbGxlclwiXHJcblxyXG5jb25zdCBhdXRvY29tcGxldGUgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHRlcm06IFwiPFwiLFxyXG4gICAgICAgIGhhc0ZvY3VzOiBcIj1cIixcclxuICAgICAgICBpc1Zpc2libGU6IFwiPVwiLFxyXG4gICAgICAgIGNob29zZUNvbnRhY3Q6IFwiJlwiXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGF1dG9jb21wbGV0ZVRlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjogQXV0b2NvbXBsZXRlQ29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0b2NvbXBsZXRlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL2F1dG9jb21wbGV0ZUNvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhdXRvY29tcGxldGVcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJjb250YWN0IGluICRjdHJsLmNvbnRhY3RzXFxcIlxcclxcbiAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5oYXNGb2N1cz1mYWxzZTsgJGN0cmwuY2hvb3NlQ29udGFjdCh7Y29udGFjdDpjb250YWN0fSk7XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIG5nLWJpbmQtaHRtbD1cXFwiY29udGFjdC5mdWxsTmFtZVxcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBuZy1mb2N1cz1cXFwiJGN0cmwuaGFzRm9jdXM9dHJ1ZTtcXFwiIG5nLWJsdXI9XFxcIiRjdHJsLmhhc0ZvY3VzPWZhbHNlO1xcXCI+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1haWxfYWRkcmVzc1xcXCIgbmctYmluZC1odG1sPVxcXCJjb250YWN0LmVtYWlsXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWxzL3ZpZXdzL2F1dG9jb21wbGV0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgQXV0b2NvbWxldGVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKEJhc2VTZXJ2aWNlKXtcclxuICAgICAgICBCYXNlU2VydmljZS5nZXREYXRhKFwidXNlcnNcIikudGhlbihyZXNwb25jZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzRnVsbCA9IHJlc3BvbmNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckNvbnRhY3RzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb250YWN0c0Nhc2ggPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGVybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGVybTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGVybSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3Rlcm0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmZpbHRlckNvbnRhY3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQ29udGFjdHMoKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRhY3RzRnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBjb250YWN0c0Zyb21DYXNoID0gdGhpcy5jb250YWN0c0Nhc2hbdGhpcy50ZXJtXTtcclxuICAgICAgICAgICAgaWYoY29udGFjdHNGcm9tQ2FzaCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RzID0gY29udGFjdHNGcm9tQ2FzaDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmNvbnRhY3RzRnVsbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb250YWN0ID0gdGhpcy5jb250YWN0c0Z1bGxbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDb250YWN0KGN1cnJlbnRDb250YWN0LFwiZnVsbE5hbWVcIikgfHwgdGhpcy5zZWxlY3RDb250YWN0KGN1cnJlbnRDb250YWN0LFwiZW1haWxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWN0c0Nhc2hbdGhpcy50ZXJtXSA9IHRoaXMuY29udGFjdHM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb250YWN0cy5sZW5ndGggPT0gMCkgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RDb250YWN0IChjb250YWN0LGZpZWxkKXtcclxuICAgICAgICB2YXIgdXBkYXRlZEZpZWxkID0gdGhpcy5zZWxlY3RUZXJtKGNvbnRhY3RbZmllbGRdKTtcclxuICAgICAgICBpZihjb250YWN0W2ZpZWxkXSAhPSB1cGRhdGVkRmllbGQpe1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRDb250YWN0ID0gYW5ndWxhci5jb3B5KGNvbnRhY3QpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZENvbnRhY3QucmVhbEVtYWlsID0gc2VsZWN0ZWRDb250YWN0LmVtYWlsO1xyXG4gICAgICAgICAgICBzZWxlY3RlZENvbnRhY3RbZmllbGRdID0gdXBkYXRlZEZpZWxkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhY3RzLnB1c2goc2VsZWN0ZWRDb250YWN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RUZXJtIChzdHIpe1xyXG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAodGhpcy50ZXJtLFwiaVwiKTtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UocmUsZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICAgICAgcmV0dXJuIGA8Yj4ke3N0cn08L2I+YDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0b2NvbWxldGVDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL2F1dG9jb21wbGV0ZUNvbnRyb2xsZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1haWwtcGFnZT48L21haWwtcGFnZT5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlscy92aWV3cy9tYWlsLXN0YXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtYWlsLWxpc3QgZm9sZGVyLW5hbWU9JyRjdHJsLmZvbGRlck5hbWUnPjwvbWFpbC1saXN0PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWxzL3ZpZXdzL21haWwtbGlzdC1zdGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWFpbC12aWV3IG1haWwtaWQ9JyRjdHJsLm1haWxJZCc+PC9tYWlsLXZpZXc+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbHMvdmlld3MvbWFpbC12aWV3LXN0YXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IG1haWxMaXN0U3RhdGVDb250cm9sbGVyID0gZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcykge1xyXG4gICAgdGhpcy5mb2xkZXJOYW1lID0gJHN0YXRlUGFyYW1zLmZvbGRlck5hbWU7XHJcbiAgICAvL01haWxTZXJ2aWNlLnNlbGVjdGVkRm9sZGVyID0gdGhpcy5mb2xkZXJOYW1lO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbExpc3RTdGF0ZUNvbnRyb2xsZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL21haWxMaXN0U3RhdGVDb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBtYWlsVmlld1N0YXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMpIHtcclxuICAgIHRoaXMubWFpbElkID0gJHN0YXRlUGFyYW1zLm1haWxJZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haWxWaWV3U3RhdGVDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL21haWxWaWV3U3RhdGVDb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBvbkV4aXRNYWlsVmlld1N0YXRlID0gZnVuY3Rpb24gKE1haWxTZXJ2aWNlKSB7XHJcbiAgICBNYWlsU2VydmljZS5zZWxlY3RlZE1haWwgPSBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25FeGl0TWFpbFZpZXdTdGF0ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWlscy9vbkV4aXRNYWlsVmlld1N0YXRlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQmFzZVNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2Jhc2VTZXJ2aWNlXCI7XHJcblxyXG5jbGFzcyBNYWlsU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBVdGlsc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigkaHR0cCwgVXRpbHNTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRm9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFpbCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rm9sZGVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhKFwiZm9sZGVyc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYWlscyhmb2xkZXJOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YShmb2xkZXJOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkSXRlbShmb2xkZXJOYW1lLCBtYWlsSWQpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0U2VsZWN0ZWRJdGVtKGZvbGRlck5hbWUsIG1haWxJZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pZCA9IG1haWxJZDtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9sZGVyID0gZm9sZGVyTmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRNYWlsKG1haWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGQobWFpbCwgXCJzZW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZE1haWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RlZE1haWwobWFpbCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbWFpbDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxTZXJ2aWNlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWlscy9tYWlsU2VydmljZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vc2hhcmVkXCI7XHJcbmltcG9ydCBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBjb250YWN0UGFnZUNvbXBvbmVudCBmcm9tIFwiLi9jb250YWN0UGFnZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY29udGFjdExpc3RDb21wb25lbnQgZnJvbSBcIi4vY29udGFjdExpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IGNvbnRhY3RWaWV3Q29tcG9uZW50IGZyb20gXCIuL2NvbnRhY3RWaWV3Q29tcG9uZW50XCI7XHJcbmltcG9ydCBjaGFuZ2VEYXRlRm9ybWF0RGlyZWN0aXZlIGZyb20gXCIuL2NoYW5nZURhdGVGb3JtYXREaXJlY3RpdmVcIjtcclxuaW1wb3J0IGNvbnRhY3RzU3RhdGVUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9jb250YWN0cy1zdGF0ZS5odG1sXCI7XHJcbmltcG9ydCBjb250YWN0Vmlld1N0YXRlVGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvY29udGFjdC12aWV3LXN0YXRlLmh0bWxcIjtcclxuaW1wb3J0IGNvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyIGZyb20gXCIuL2NvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBDb250YWN0U2VydmljZSBmcm9tIFwiLi9jb250YWN0U2VydmljZVwiO1xyXG5cclxuY29uc3QgY29udGFjdHMgPSBhbmd1bGFyLm1vZHVsZShcImNvbnRhY3RzXCIsIFtcImNvbW1vblwiLCBcInNlcnZpY2VzXCIsIFwibmdNZXNzYWdlc1wiLCBcInVpLnJvdXRlclwiLCBcIm5nU2FuaXRpemVcIl0pO1xyXG5cclxuY29udGFjdHMuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoXCJjb250YWN0c1wiLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvY29udGFjdHNcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IGNvbnRhY3RzU3RhdGVUZW1wbGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKFwiY29udGFjdFZpZXdcIiwge1xyXG4gICAgICAgICAgICBwYXJlbnQ6IFwiY29udGFjdHNcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9jb250YWN0P2NvbnRhY3RJZFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogY29udGFjdFZpZXdTdGF0ZVRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcImNvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyIGFzICRjdHJsXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZShcIm5ld0NvbnRhY3RcIiwge1xyXG4gICAgICAgICAgICBwYXJlbnQ6IFwiY29udGFjdHNcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9uZXdDb250YWN0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBjb250YWN0Vmlld1N0YXRlVGVtcGxhdGVcclxuICAgICAgICB9KTtcclxufSk7XHJcblxyXG5jb250YWN0cy5jb21wb25lbnQoXCJjb250YWN0UGFnZVwiLCBjb250YWN0UGFnZUNvbXBvbmVudCk7XHJcbmNvbnRhY3RzLmNvbXBvbmVudChcImNvbnRhY3RMaXN0XCIsIGNvbnRhY3RMaXN0Q29tcG9uZW50KTtcclxuY29udGFjdHMuY29tcG9uZW50KFwiY29udGFjdFZpZXdcIiwgY29udGFjdFZpZXdDb21wb25lbnQpO1xyXG5jb250YWN0cy5kaXJlY3RpdmUoXCJjaGFuZ2VEYXRlRm9ybWF0XCIsIGNoYW5nZURhdGVGb3JtYXREaXJlY3RpdmUpO1xyXG5jb250YWN0cy5jb250cm9sbGVyKFwiY29udGFjdFZpZXdTdGF0ZUNvbnRyb2xsZXJcIiwgY29udGFjdFZpZXdTdGF0ZUNvbnRyb2xsZXIpO1xyXG5jb250YWN0cy5zZXJ2aWNlKFwiQ29udGFjdFNlcnZpY2VcIiwgQ29udGFjdFNlcnZpY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdHM7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2luZGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgY29udGFjdFBhZ2VUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9jb250YWN0LXBhZ2UuaHRtbFwiO1xyXG5cclxuY29uc3QgY29udGFjdFBhZ2UgPSB7XHJcbiAgICB0ZW1wbGF0ZTogY29udGFjdFBhZ2VUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIChDb250YWN0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaXNDb250YWN0U2VsZWN0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb250YWN0U2VydmljZS5zZWxlY3RlZENvbnRhY3QgIT09IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY29udGFjdHMvY29udGFjdFBhZ2VDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicmlnaHRfY29sXFxcIj5cXHJcXG4gICAgPGNvbnRhY3QtbGlzdCBuZy1pZj1cXFwiISRjdHJsLmlzQ29udGFjdFNlbGVjdGVkKClcXFwiPjwvY29udGFjdC1saXN0PlxcclxcbiAgICA8dWktdmlldz48L3VpLXZpZXc+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29udGFjdHMvdmlld3MvY29udGFjdC1wYWdlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgY29udGFjdExpc3RUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9jb250YWN0LWxpc3QuaHRtbFwiO1xyXG5pbXBvcnQgQ29udGFjdExpc3RDb250cm9sbGVyIGZyb20gXCIuL2NvbnRhY3RMaXN0Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY29udGFjdExpc3QgPSB7XHJcbiAgICB0ZW1wbGF0ZTogY29udGFjdExpc3RUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IENvbnRhY3RMaXN0Q29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdExpc3Q7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjb250YWN0cy9jb250YWN0TGlzdENvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWN0X2xpc3RcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXHJcXG4gICAgICAgIDxjdXN0b20tYnV0dG9uIGNsYXNzPVxcXCInYWRkJ1xcXCIgbmFtZT1cXFwiJ0FkZCdcXFwiICBjbGljay1oYW5kbGVyPVxcXCIkY3RybC5hZGQoKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIHNyZWY9XFxcIiduZXdDb250YWN0J1xcXCI+PC9jdXN0b20tYnV0dG9uPlxcclxcbiAgICAgICAgPGN1c3RvbS1idXR0b24gY2xhc3M9XFxcIidkZWwnXFxcIiBuYW1lPVxcXCInRGVsZXRlJ1xcXCIgY2xpY2staGFuZGxlcj1cXFwiJGN0cmwucmVtb3ZlKClcXFwiPjwvY3VzdG9tLWJ1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImNvbnRhY3QgaW4gJGN0cmwuY29udGFjdHNcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImNvbnRhY3QuY2hlY2tlZFxcXCIvPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdWktc3JlZj1cXFwiY29udGFjdFZpZXcoe2NvbnRhY3RJZDogY29udGFjdC5pZH0pXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLnNldFNlbGVjdGVkQ29udGFjdChjb250YWN0KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnt7Y29udGFjdC5mdWxsTmFtZX19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1haWxfYWRkcmVzc1xcXCI+PGEgaHJlZj1cXFwibWFpbHRvOnt7Y29udGFjdC5lbWFpbH19XFxcIj57e2NvbnRhY3QuZW1haWx9fTwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmlydGhkYXRlXFxcIj57e2NvbnRhY3QuYmlydGhkYXRlIHwgZGF0ZTogJ2RkL01NL3l5eXknfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWRkcmVzc1xcXCI+e3tjb250YWN0LmFkZHJlc3N9fTwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb250YWN0cy92aWV3cy9jb250YWN0LWxpc3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBMaXN0Q29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdENvbnRyb2xsZXJcIjtcclxuXHJcbmNsYXNzIENvbnRhY3RMaXN0Q29udHJvbGxlciBleHRlbmRzIExpc3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKENvbnRhY3RTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoQ29udGFjdFNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb250YWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29udGFjdHMoaXRlbXMpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZENvbnRhY3RzKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5nZXREYXRhKCkudGhlbigoY29udGFjdHMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQ29udGFjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZENvbnRhY3QoY29udGFjdCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtKGNvbnRhY3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TGlzdENvbnRyb2xsZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2NvbnRhY3RMaXN0Q29udHJvbGxlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGNvbnRhY3RWaWV3VGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvY29udGFjdC12aWV3Lmh0bWxcIjtcclxuaW1wb3J0IGNvbnRhY3RWaWV3Q29udHJvbGxlciBmcm9tIFwiLi9jb250YWN0Vmlld0NvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3RWaWV3ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBjb250YWN0SWQ6XCI8XCJcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogY29udGFjdFZpZXdUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IGNvbnRhY3RWaWV3Q29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFZpZXc7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjb250YWN0cy9jb250YWN0Vmlld0NvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWN0X3ZpZXdcXFwiPlxcclxcbiAgICA8Zm9ybSBuYW1lPVxcXCJjb250YWN0Rm9ybVxcXCIgbm92YWxpZGF0ZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxjdXN0b20tYnV0dG9uIGNsYXNzPVxcXCIkY3RybC5pc05ldyA/ICdzaW5nbGUnOiAnZWRpdCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiJGN0cmwuZWRpdE1vZGUgPyAnU2F2ZScgOiAnRWRpdCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XFxcImNvbnRhY3RGb3JtLiRpbnZhbGlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrLWhhbmRsZXI9XFxcIiRjdHJsLmVkaXRNb2RlID8gJGN0cmwuc2F2ZSgpIDogJGN0cmwuZWRpdCgpXFxcIj48L2N1c3RvbS1idXR0b24+XFxyXFxuICAgICAgICAgICAgPGN1c3RvbS1idXR0b24gY2xhc3M9XFxcIidkZWwnXFxcIiBuYW1lPVxcXCInRGVsZXRlJ1xcXCIgbmctaWY9XFxcIiEkY3RybC5pc05ld1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljay1oYW5kbGVyPVxcXCIkY3RybC5yZW1vdmUoKVxcXCI+PC9jdXN0b20tYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lX3Jvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hbWVfdGV4dFxcXCIgbmctaWY9XFxcIiEkY3RybC5lZGl0TW9kZVxcXCI+e3skY3RybC5jb250YWN0LmZ1bGxOYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIm5hbWVcXFwiIG5nLWlmPVxcXCIkY3RybC5lZGl0TW9kZVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLmNvbnRhY3QuZnVsbE5hbWVcXFwiIHJlcXVpcmVkIG5nLW1pbmxlbmd0aD1cXFwiNVxcXCI+XFxyXFxuICAgICAgICAgICAgPG1lc3NhZ2VzIGVsZW1lbnQ9XFxcImNvbnRhY3RGb3JtLm5hbWVcXFwiIGVycm9ycz1cXFwiJGN0cmwubmFtZUZpZWxkRXJyb3JzXFxcIiB2aXNpYmlsaXR5PVxcXCJjb250YWN0Rm9ybS5uYW1lLiRkaXJ0eVxcXCI+PC9tZXNzYWdlcz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYWJlbF93cmFwcGVyXFxcIj48bGFiZWw+TWFpbCBhZGRyZXNzPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWlsX2FkZHJlc3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBuZy1pZj1cXFwiISRjdHJsLmVkaXRNb2RlXFxcIiBocmVmPVxcXCJtYWlsdG86e3skY3RybC5jb250YWN0LmVtYWlsfX1cXFwiPnt7JGN0cmwuY29udGFjdC5lbWFpbH19PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiZW1haWxcXFwiIG5nLWlmPVxcXCIkY3RybC5lZGl0TW9kZVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLmNvbnRhY3QuZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgPG1lc3NhZ2VzIGVsZW1lbnQ9XFxcImNvbnRhY3RGb3JtLmVtYWlsXFxcIiBlcnJvcnM9XFxcIiRjdHJsLm1haWxGaWVsZEVycm9yc1xcXCIgdmlzaWJpbGl0eT1cXFwiY29udGFjdEZvcm0uZW1haWwuJGRpcnR5XFxcIj48L21lc3NhZ2VzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhYmVsX3dyYXBwZXJcXFwiPjxsYWJlbD5CaXJ0aGRhdGU8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJpcnRoZGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIG5nLWlmPVxcXCIhJGN0cmwuZWRpdE1vZGVcXFwiPnt7JGN0cmwuY29udGFjdC5iaXJ0aGRhdGUgfCBkYXRlOiAnZGQvTU0veXl5eSd9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IG5nLWlmPVxcXCIkY3RybC5lZGl0TW9kZVxcXCIgY2hhbmdlLWRhdGUtZm9ybWF0IHR5cGU9XFxcImRhdGVcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5jb250YWN0LmJpcnRoZGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFiZWxfd3JhcHBlclxcXCI+PGxhYmVsPkFkZHJlc3M8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFkZHJlc3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBuZy1pZj1cXFwiISRjdHJsLmVkaXRNb2RlXFxcIj57eyRjdHJsLmNvbnRhY3QuYWRkcmVzc319PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmctaWY9XFxcIiRjdHJsLmVkaXRNb2RlXFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwuY29udGFjdC5hZGRyZXNzXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29udGFjdHMvdmlld3MvY29udGFjdC12aWV3Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgVmlld0NvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3ZpZXdDb250cm9sbGVyXCI7XHJcblxyXG5jbGFzcyBDb250YWN0Vmlld0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihDb250YWN0U2VydmljZSwgJHN0YXRlKSB7XHJcbiAgICAgICAgc3VwZXIoQ29udGFjdFNlcnZpY2UsICRzdGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5zZWxlY3RlZEl0ZW0gPT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRJdGVtKFwidXNlcnNcIiwgdGhpcy5jb250YWN0SWQpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhY3QgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRJdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9IHRoaXMuaXNOZXcgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbEZpZWxkRXJyb3JzID0gW1xyXG4gICAgICAgICAgICB7dHlwZTogXCJyZXF1aXJlZFwiLCB0ZXh0OiBcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGZvciB0aGlzIGZpZWxkXCJ9LFxyXG4gICAgICAgICAgICB7dHlwZTogXCJlbWFpbFwiLCB0ZXh0OiBcIkVudGVyIGEgdmFsaWQgZS1tYWlsXCJ9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lRmllbGRFcnJvcnMgPSBbXHJcbiAgICAgICAgICAgIHt0eXBlOiBcInJlcXVpcmVkXCIsIHRleHQ6IFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgZm9yIHRoaXMgZmllbGRcIn0sXHJcbiAgICAgICAgICAgIHt0eXBlOiBcIm1pbmxlbmd0aFwiLCB0ZXh0OiBcIlRoaXMgZmllbGQgY2FuIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBsb25nXCJ9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29udGFjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb250YWN0KGl0ZW0pIHtcclxuICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc05ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWN0SWQgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmFkZCh0aGlzLmNvbnRhY3QpLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZ28oXCJjb250YWN0Vmlld1wiLCB7Y29udGFjdElkOiB0aGlzLmNvbnRhY3QuaWR9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh0aGlzLmNvbnRhY3QpLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdvVG9MaXN0U3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5nbyhcImNvbnRhY3RzXCIsIHtyZWxvYWQ6ICdjb250YWN0cyd9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFZpZXdDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2NvbnRhY3RWaWV3Q29udHJvbGxlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgY2hhbmdlRGF0ZUZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xyXG5cclxuICAgICAgICAgICAgLy9tb2RlbCAtPiB2aWV3XHJcbiAgICAgICAgICAgIG5nTW9kZWwuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbiAobW9kZWxWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vdmlldyAtPiBtb2RlbFxyXG4gICAgICAgICAgICBuZ01vZGVsLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24gKHZpZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXdWYWx1ZSA/IHZpZXdWYWx1ZS5nZXRUaW1lKCkgOiB2aWV3VmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VEYXRlRm9ybWF0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2NoYW5nZURhdGVGb3JtYXREaXJlY3RpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGNvbnRhY3QtcGFnZT48L2NvbnRhY3QtcGFnZT5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb250YWN0cy92aWV3cy9jb250YWN0cy1zdGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Y29udGFjdC12aWV3IGNvbnRhY3QtaWQ9JyRjdHJsLmNvbnRhY3RJZCc+PC9jb250YWN0LXZpZXc+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29udGFjdHMvdmlld3MvY29udGFjdC12aWV3LXN0YXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBjb250YWN0Vmlld1N0YXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMpIHtcclxuICAgIHRoaXMuY29udGFjdElkID0gJHN0YXRlUGFyYW1zLmNvbnRhY3RJZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2NvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQmFzZVNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2Jhc2VTZXJ2aWNlXCJcclxuXHJcbmNsYXNzIENvbnRhY3RTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIFV0aWxzU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCRodHRwLCBVdGlsc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRhdGFOYW1lID0gXCJ1c2Vyc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkSXRlbShmb2xkZXJOYW1lLCBjb250YWN0SWQpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0U2VsZWN0ZWRJdGVtKGZvbGRlck5hbWUsIGNvbnRhY3RJZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pZCA9IGNvbnRhY3RJZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZENvbnRhY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RlZENvbnRhY3QoY29udGFjdCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gY29udGFjdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY29udGFjdHMvY29udGFjdFNlcnZpY2UuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBtYWluUGFnZVRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL21haW4tcGFnZS5odG1sXCI7XHJcblxyXG5jb25zdCBtYWluUGFnZSA9IHtcclxuICAgIHRlbXBsYXRlOiBtYWluUGFnZVRlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGFnZUxpc3QgPSBbe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJNYWlsc1wiLFxyXG4gICAgICAgICAgICBzdGF0ZTogXCJtYWlsXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbnRhY3RzXCIsXHJcbiAgICAgICAgICAgIHN0YXRlOiBcImNvbnRhY3RzXCJcclxuICAgICAgICB9XTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5QYWdlO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbi9tYWluUGFnZUNvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGgxPk1haWxBcHA8L2gxPlxcclxcbiAgICAgICAgPHRvcC1uYXYgbmF2LWxpc3Q9XFxcIiRjdHJsLnBhZ2VMaXN0XFxcIj48L3RvcC1uYXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvaGVhZGVyPlxcclxcbjxtYWluPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPHVpLXZpZXc+PC91aS12aWV3PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L21haW4+XFxyXFxuPGZvb3Rlcj48L2Zvb3Rlcj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWluL3ZpZXdzL21haW4tcGFnZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHRvcE5hdlRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL3RvcC1uYXYuaHRtbFwiO1xyXG5cclxuY29uc3QgdG9wTmF2ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYXZMaXN0OiBcIjxcIlxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiB0b3BOYXZUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIChDb250YWN0U2VydmljZSxNYWlsU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIENvbnRhY3RTZXJ2aWNlLnNlbGVjdGVkQ29udGFjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIE1haWxTZXJ2aWNlLnNlbGVjdGVkTWFpbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9wTmF2O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbi90b3BOYXZDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwidG9wX25hdlxcXCI+XFxyXFxuICA8dWw+XFxyXFxuICAgIDwhLS08dG9wLW5hdi1pdGVtIG5hdi1pdGVtPVxcXCJuYXZJdGVtXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cXFwibmF2SXRlbSBpbiAkY3RybC5uYXZMaXN0XFxcIj48L3RvcC1uYXYtaXRlbT4tLT5cXHJcXG4gICAgPGxpIG5nLXJlcGVhdD1cXFwibmF2SXRlbSBpbiAkY3RybC5uYXZMaXN0XFxcIj5cXHJcXG4gICAgICA8YSB1aS1zcmVmPVxcXCJ7e25hdkl0ZW0uc3RhdGV9fVxcXCJcXHJcXG4gICAgICAgICB1aS1zcmVmLWFjdGl2ZT1cXFwiYWN0aXZlXFxcIlxcclxcbiAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5yZXNldCgpXFxcIj5cXHJcXG4gICAgICAgIHt7bmF2SXRlbS50aXRsZX19PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgPC91bD5cXHJcXG48L25hdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWluL3ZpZXdzL3RvcC1uYXYuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW9CQTtBQUNBO0FBQ0E7QUF0QkE7QUFQQTtBQUNBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdEQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQVRBO0FBQ0E7QUFZQTs7Ozs7O0FDakJBOzs7Ozs7QUNBQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBQ0E7QUFVQTs7Ozs7O0FDZkE7Ozs7OztBQ0FBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUZBOztBQU1BOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7OztBQUdBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUFBO0FBTEE7QUFPQTs7OztBQWpEQTs7O0FBcURBOzs7Ozs7QUN2REE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQUNBO0FBUUE7QUFWQTtBQUNBO0FBWUE7Ozs7OztBQ2ZBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBUEE7QUFGQTtBQUNBO0FBWUE7Ozs7OztBQ2pCQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBRkE7QUFDQTtBQVFBOzs7Ozs7QUNiQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7O0FDYkE7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBRkE7QUFDQTtBQUZBOztBQU1BOzs7QUFDQTtBQUVBO0FBREE7Ozs7QUFLQTtBQUNBOzs7O0FBV0E7QUFDQTs7OztBQVRBO0FBQ0E7O0FBR0E7QUFDQTs7OztBQXRCQTs7O0FBOEJBOzs7Ozs7QUNsQ0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7O0FBT0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFBQTtBQUxBO0FBT0E7QUFQQTs7OztBQTdCQTs7O0FBeUNBOzs7Ozs7QUMzQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7O0FDYkE7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBVEE7QUFDQTtBQUZBOztBQXFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBOzs7O0FBT0E7QUFDQTtBQUNBOzs7O0FBdERBO0FBQ0E7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7OztBQWxDQTs7O0FBMEVBOzs7Ozs7QUM5RUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7O0FBT0E7OztBQUNBO0FBQ0E7QUFDQTtBQUZBOzs7O0FBTUE7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBTkE7QUFRQTtBQVJBOzs7O0FBZkE7OztBQTRCQTs7Ozs7O0FDOUJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFSQTtBQUNBO0FBVUE7Ozs7OztBQ2hCQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQUNBO0FBRkE7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVhBO0FBRkE7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7O0FBMUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOzs7O0FBZkE7OztBQXlEQTs7Ozs7O0FDM0RBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7Ozs7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFJQTs7Ozs7O0FDTkE7QUFDQTs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7OztBQ05BO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7QUNOQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTs7QUFIQTtBQUNBO0FBRkE7O0FBT0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBR0E7QUFDQTs7OztBQWxDQTs7O0FBdUNBOzs7Ozs7QUMzQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBZEE7QUFEQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeENBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUZBO0FBQ0E7QUFRQTs7Ozs7O0FDYkE7Ozs7OztBQ0FBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7OztBQ1ZBOzs7Ozs7QUNBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7O0FBYUE7OztBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBbkJBO0FBQ0E7O0FBR0E7QUFDQTs7OztBQVZBOzs7QUE0QkE7Ozs7OztBQ2hDQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7QUNiQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBakJBO0FBQ0E7QUFGQTs7QUFvQ0E7QUFDQTs7OztBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFOQTs7OztBQVlBO0FBQ0E7Ozs7QUE5QkE7QUFDQTs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQWpDQTs7O0FBMERBOzs7Ozs7QUM5REE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFKQTtBQVNBO0FBREE7QUFSQTtBQUhBO0FBREE7QUFDQTtBQWtCQTs7Ozs7O0FDckJBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7OztBQ05BO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBOztBQUhBO0FBQ0E7QUFGQTs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTs7OztBQUdBO0FBQ0E7O0FBR0E7QUFDQTs7OztBQXJCQTs7O0FBeUJBOzs7Ozs7QUM3QkE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUxBO0FBREE7QUFGQTtBQUNBO0FBWUE7Ozs7OztBQ2pCQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFMQTtBQUNBO0FBWUE7Ozs7OztBQ2pCQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==